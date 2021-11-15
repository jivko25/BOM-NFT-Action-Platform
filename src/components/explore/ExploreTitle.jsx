import { Typography } from "@mui/material";
import styles from './ExploreTitle.module.scss';


export default function ExploreTitle({text}){
    return(
        <div className={styles["explore-title"]}>
            <Typography variant={'h1'} className={styles.text}>{text}</Typography>
        </div>
    );
}