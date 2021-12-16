import { Stack, Container } from "@mui/material";
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
        <div className={styles["product-info"]}>
        <Grid container>
            {/* <Grid item xs={5}>
                <ProductImage url="images/nft.jpg" />
            </Grid> */}
            <Grid item 
            xs={12} lg={9}
            >
                <Stack className={styles.stats}>
                    <ProductInfoTitle text={title} /> 
                    <Grid container direction="row" className={styles.price_status_likes} justifyContent={"center"}>
                        <Grid item xs={isLive ? 7 : 8}>
                            <ProductInfoPrice amount={price} currency={currency} />
                        </Grid>
                        {isLive ?
                        <Grid item xs={2}>
                            <ProductInfoStatus/>
                        </Grid>
                        : null}
                        <Grid item xs={2}>
                            <ProductInfoLikes amount={likes} />
                        </Grid>
                    </Grid>
                    <Grid container className={styles.creator_timer} spacing={5}>
                        <Grid item xs={12} md={6} maxWidth={"700px"} justifyContent={"center"}>
                            {/* <Container> */}
                                <ProductInfoCreator name={creator?.username} avatar={creator?.avatar.url} verified={creator?.verified} ownerId={creator?.id}/>
                            {/* </Container> */}
                        </Grid>
                        <Grid item xs={12} md={6} maxWidth={"700px"}>
                            {timeEnd > 0 ? 
                            // <Container>
                                <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/>
                            // </Container>
                            : null
                            }
                        </Grid>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
        </div>
    );
}