import { Typography } from "@mui/material";
import styles from './Hero.module.scss';


export default function Hero({text}){
    return(
        <div className={styles.hero}>
            <Typography variant={'h1'} className={styles.text}>{text}</Typography>
        </div>
    );
}