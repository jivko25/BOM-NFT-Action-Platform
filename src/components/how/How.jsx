import { Grid } from '@mui/material';
import HowStep from './Step';
import styles from './How.module.scss';
import Button from "@mui/material/Button";

export default function How({description = '', title ='', items = [], link = ''}){
    let number = [0];
    return (
        <Grid container xl={12}>
            <Grid item xl = {7}>
                <div className={styles.backgroundDiv}></div>
                <div className={styles.infoDiv}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Button variant="text" color="inherit" className={styles.link} href={link}>Learn more</Button>
                </div>
            </Grid>
            <Grid item xl = {5}>
                {
                    items.map(item => {
                        number[0] = number[0] + 1;
                        return <HowStep title={item.title} description={item.description} number = {number[0]}/>
                    })
                }
            </Grid>
        </Grid>
    );
}