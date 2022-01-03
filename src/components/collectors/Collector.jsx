import {Container, Grid } from "@mui/material";
import styles from './Collector.module.scss';
import User from '../user/User'
import { style } from './Collector.module.scss';
import Link from 'next/link';


export default function Collector({name = '', nftsCount = 0, avatar = '', verified = false, id, type, profileId}){
    return(
        <Grid container className={id % 3 == 0 ? styles.wrapper_down : type == 'light' ? styles.wrapper : styles.wrapper_upper} wrap="nowrap">
            <Grid item xl = {3} className={id % 3 == 0 ? styles.number_down :type == 'light' ? styles.number : styles.number_upper}>
                <p className={styles.id}>{id}</p>
            </Grid>
            <Link href={typeof window !== undefined && JSON.parse(sessionStorage.getItem('user'))?.token ? `/profile/${profileId}` : '/login'}>
            <Grid item xl = {9} className={styles.content} justifyContent={"left"}>
                <User name = {name} info = {nftsCount > 1 ? `${nftsCount} items` : `${nftsCount} item`} avatar = {avatar} verified = {verified} size={45}/>
            </Grid>
            </Link>
        </Grid>
    );
}