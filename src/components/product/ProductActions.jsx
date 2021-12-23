import { Button, Grid } from '@mui/material';
import styles from './ProductActions.module.scss'

export default function ProductActions({isLive = false, currency = '', buyAmount = 0, bidAmount = 0, onBuy, onBid}){
    return(
        <div className={styles["product-actions"]}>
            <Grid container spacing={3} justifyContent={"center"}>
                <Grid item xs={12} sm={5}>
                        <Button variant="contained" className={styles.button} onClick={onBuy} disabled={!isLive}>BUY FOR {buyAmount} {currency}</Button>                
                </Grid>
                <Grid item xs={12} sm={5} justifyContent={"center"}>
                        <Button variant="outlined" color="success" className={styles.button} onClick={onBid} disabled={!isLive}>PLACE BID FOR {bidAmount} {currency}</Button>                
                </Grid>
            </Grid>
        </div>
    );
}