import { Stack } from "@mui/material";
import { Grid} from "@mui/material";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductImage from "./ProductImage";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoTimer from "./ProductInfoTimer";
import ProductInfoTitle from "./ProductInfoTitle";
import styles from './ProductInfo.module.scss';


export default function ProductInfo({title = '', creator, price = 0, currency = '', likes = 0, onTimeEnd = '', timeEnd, isLive = false}){
    return(
        <Grid container className={styles["product-info"]} xl={12}>
            <Grid item xl={5}>
                <ProductImage url="images/nft.jpg" />
            </Grid>
            <Grid item xl={7}>
                <Stack>
                    <ProductInfoTitle text={title} /> 
                    <Grid container direction="row" className={styles.stats}>
                        <Grid item xs={isLive ? 9 : 10}>
                            <ProductInfoPrice amount={price} currency={currency} />
                        </Grid>
                        {isLive ?
                        <Grid item xs={1}>
                            <ProductInfoStatus/>
                        </Grid>
                        : null}
                        <Grid item xs={1}>
                            <ProductInfoLikes amount={likes} />
                        </Grid>
                    </Grid>
                    <Grid container className={styles.creator_timer}>
                        <Grid item xl={7}>
                            <ProductInfoCreator name={creator.name} avatar={creator.avatar} verified={creator.verified}/>
                        </Grid>
                        <Grid item xl={5}>
                            <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/>
                        </Grid>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
    );
}