import { Button, Grid } from '@mui/material';
import styles from './ProductActions.module.scss'

export default function ProductActions({isLive = false, currency = '', buyAmount = 0, bidAmount = 0, onBuy, onBid}){
    return(
        <div className={styles["product-actions"]}>
            <Grid container>
                <Grid item xs={7}>
                    {isLive ? 
                        <Button variant="contained" className={styles.button} onClick={onBuy}>BUY FOR {buyAmount} {currency}</Button>
                        :
                        <Button variant="contained" className={styles.button} onClick={onBuy} disabled>BUY FOR {buyAmount} {currency}</Button>                
                    }
                </Grid>
                <Grid item xs={5}>
                    {isLive ? 
                        <Button variant="outlined" color="success" className={styles.button} onClick={onBid}>PLACE BID FOR {bidAmount} {currency}</Button>
                        :
                        <Button variant="outlined" color="success" className={styles.button} onClick={onBid} disabled>PLACE BID FOR {bidAmount} {currency}</Button>                
                    }
                </Grid>
            </Grid>
        </div>
    );
}