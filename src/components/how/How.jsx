import { Grid } from '@mui/material';
import Step from './Step';
import styles from './How.module.scss';
import Button from "@mui/material/Button";

export default function How({description = '', title ='', items = [], link = ''}){
    let number = [0];
    return (
        <Grid container xl={12} className={styles.backgroundDiv} justifyContent={"center"}>
            <Grid item xs ={12} lg = {7} >
                {/* <div className={styles.backgroundDiv}></div> */}
                <div className={styles.infoDiv}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                        <Button variant="text" color="inherit" className={styles.link} href={link}>Learn more</Button>
                </div>
            </Grid>
            <Grid item xs = {12} lg = {5}>
                <Grid container spacing={5} justifyContent={"center"}>
                {
                    items.map((item, index)=> {
                        return <Grid item xs = {10} lg={12}>
                            <Step title={item.title} description={item.description} number = {index+1} key={`${item.name}_${index+1}`}/>
                        </Grid>
                    })
                }
                </Grid>
            </Grid>
        </Grid>
    );
}