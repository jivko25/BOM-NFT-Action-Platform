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
                    name = {item.name} 
                    nftsCount = {item.nftsCount} 
                    avatar = {item.avatar} 
                    verified = {item.verified} 
                    id = {index+1} 
                    type={(index + 1) % 2 === 0 ? "light" : ""}/>
                })
            }
        </div>
    );
}