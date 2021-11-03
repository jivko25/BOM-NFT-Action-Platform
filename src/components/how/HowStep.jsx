import styles from './HowStep.module.scss';
import { Grid } from "@mui/material";

export default function HowStep({number, title = '',description = ''}){
    return(
        <Grid container className={styles.container} xs={10}>
            <Grid item className={styles.number} xl={5}>
                <p>{number}</p>
            </Grid>
            <Grid item className={styles.content} xl={7}>
                <h3>{title}</h3>
                <p>{description}</p>
            </Grid>
        </Grid>
    );
}