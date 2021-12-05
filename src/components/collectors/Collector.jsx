import {Container, Grid } from "@mui/material";
import styles from './Collector.module.scss';
import User from '../user/User'
import { style } from "@mui/material/node_modules/@mui/system";
import Link from 'next/link';


export default function Collector({name = '', nftsCount = 0, avatar = '', verified = false, id, type, profileId}){
    return(
        <Grid container className={id % 3 == 0 ? styles.wrapper_down : type == 'light' ? styles.wrapper : styles.wrapper_upper}>
            <Grid item xl = {3} className={id % 3 == 0 ? styles.number_down :type == 'light' ? styles.number : styles.number_upper}>
                <p className={styles.id}>{id}</p>
            </Grid>
            <Link href={`/profile/${profileId}`}>
            <Grid item xl = {9} className={styles.content}>
                <User name = {name} info = {nftsCount > 1 ? `${nftsCount} items` : `${nftsCount} item`} avatar = {avatar} verified = {verified}/>
            </Grid>
            </Link>
        </Grid>
    );
}