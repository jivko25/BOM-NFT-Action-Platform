import { Grid, Stack } from "@mui/material";
import styles from './ProductContainer.module.scss'
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";


export default function ProductContainer({name, owner, price, currency, likes, auction_end, isLive, details, bids, source, bidAmount, onBuy, onBid, timeEnd}){
    return(
        <div className={styles["product-container"]}>
            <Grid container>
                <Grid item xs={6}>
                    <ProductImage url={source?.url}/>
                </Grid>
                <Grid item xs={6}>
                <Stack>
                    <ProductInfo title={name}
                        creator = {owner}
                        price={price}
                        currency={currency}
                        likes={likes}
                        onTimeEnd="Time runs out"
                        timeEnd={timeEnd}
                        isLive={isLive}
                        />
                    <ProductTabs text={details} bids={bids}/>
                    <ProductActions buyAmount={price} bidAmount={bidAmount} isLive={isLive} onBuy={onBuy} onBid={onBid} currency={currency}/>
                </Stack>
                </Grid>
            </Grid>
        </div>
    );
}