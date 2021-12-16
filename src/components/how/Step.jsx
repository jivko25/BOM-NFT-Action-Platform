import styles from './Step.module.scss';
import { Grid } from "@mui/material";

export default function Step({number, title = '',description = ''}){
    return(
        <Grid container className={styles.container}>
            <Grid item className={styles.numberContainer} xs={4}>
                <p>{number}</p>
            </Grid>
            <Grid item className={styles.content} xs={8}>
                <h3>{title}</h3>
                <p>{description}</p>
            </Grid>
        </Grid>
    );
}