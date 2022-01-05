import { Container, Grid, Stack } from "@mui/material";
import styles from './ProductContainer.module.scss'
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";
import axios from "axios";
import { useEffect, useState } from "react";


export default function ProductContainer({id, name, owner, price, currency, likes, auction_end, isLive, details, bids, url, bidAmount, onBuy, onBid, onEdit, timeEnd, onDelete, buyerId, isBought}){
    const [buyerObjectId, setBuyerObjectId] = useState(buyerId)
    async function setBuyer(){
        const header = {
          'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
          'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
          'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
          'X-Parse-Revocable-Session' : '1',
          'Content-Type' : 'application/json'
        };
        await axios.put(`${process.env.api}/classes/Nfts/${id}`, {"buyerId" : bids ? bids[0]?.user.objectId : ''}, {headers: header})
        .catch((e) => console.log(e.response));
        setBuyerObjectId(bids ? bids.length > 0 ? bids[0]?.user.objectId : null : null)
      }

    useEffect(() => {
        if(!buyerObjectId){
        setBuyer();
        console.log("here");
        }
    }, [])

    return(
        <div className={styles["product-container"]}>
            <Grid container justifyContent={"center"}>
                <Grid item xs={10} md={6}>
                    <ProductImage url={url}/>
                </Grid>
                    <Grid item xs={12} md={6}>
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
                        <Container>
                        <ProductActions 
                        buyAmount={price} 
                        bidAmount={bidAmount} 
                        isLive={isLive} 
                        onBuy={onBuy} 
                        onBid={onBid} 
                        onDelete={onDelete} 
                        onEdit={onEdit}
                        currency={currency} 
                        owner={owner} 
                        buyerId={buyerId} 
                        isBought={isBought}/>
                        </Container>
                            
                    </Stack>
                    </Grid>
            </Grid>
        </div>
    );
}