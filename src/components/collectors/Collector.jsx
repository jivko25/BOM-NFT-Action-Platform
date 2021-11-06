import {Container, Grid } from "@mui/material";
import styles from './Collector.module.scss';
import User from '../user/User'
import { style } from "@mui/material/node_modules/@mui/system";


export default function Collector({name = '', nftsCount = 0, avatar = '', verified = false, id, type}){
    return(
        <Grid container className={id % 2 == 0 & type == 'light' ? styles.wrapper : id % 3 == 0 ? styles.wrapper_down : styles.wrapper_upper}>
            <Grid item xl = {3} className={id % 2 == 0 ? styles.number : id % 3 == 0 ? styles.number_down : styles.number_upper}>
                <p className={styles.id}>{id}</p>
            </Grid>
            <Grid item xl = {9} className={styles.content}>
                <User name = {name} info = {nftsCount > 1 ? `${nftsCount} items` : `${nftsCount} item`} avatar = {avatar} verified = {verified}/>
            </Grid>
        </Grid>
    );
}