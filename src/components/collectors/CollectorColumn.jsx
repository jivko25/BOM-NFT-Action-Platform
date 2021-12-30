import Collector from "./Collector";
import {Container, Grid } from "@mui/material";
import styles from "./CollectorColumn.module.scss"


export default function CollectorColumn({items = []}){
    return(
        <div className={styles.wrapper}>
            {
                items.map((item, index) => {
                    return <Collector 
                    key={index}
                    name = {item.username} 
                    nftsCount = {item.nfts.length} 
                    avatar = {item.url} 
                    verified = {item.verified} 
                    id = {item.id} 
                    profileId = {item.objectId}
                    type={(index + 1) % 2 == 0 ? "light" : ""}/>
                })
            }
        </div>
    );
}