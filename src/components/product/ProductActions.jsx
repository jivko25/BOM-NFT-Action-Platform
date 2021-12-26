import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
import styles from './ProductActions.module.scss';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function ProductActions({isLive = false, currency = '', buyAmount = 0, bidAmount = 0, onBuy, onBid, onDelete, owner}){
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setUserId(JSON.parse(sessionStorage.getItem('user')).data.objectId);
    }, [])
    
    return(
        <div className={styles["product-actions"]}>
            <Grid container spacing={3} justifyContent={"center"}>
                <Grid item xs={12} sm={4}>
                        <Button variant="contained" className={styles.button} onClick={onBuy} disabled={!isLive}>BUY FOR {buyAmount} {currency}</Button>                
                </Grid>
                <Grid item xs={12} sm={4} justifyContent={"center"}>
                        <Button variant="outlined" color="success" className={styles.button} onClick={onBid} disabled={!isLive}>PLACE BID FOR {bidAmount} {currency}</Button>                
                </Grid>
                {   owner?.id === userId ?
                    <Grid item xs={12} sm={4} justifyContent={"center"}>
                        <Button variant="outlined" color="error" className={styles.button} onClick={handleClickOpen}>DELETE THIS AUCTION</Button>                
                    </Grid>
                    : 
                    null
                }
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={onDelete}>
                    Yes
                    </Button>
                <Button onClick={handleClose}>
                    No
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}