import { Grid, Typography } from '@mui/material';
import styles from './NotFound.module.scss';

export default function NotFound(){
    return(
        <div>
            <Grid container justifyContent={"center"} style={{"textAlign" : "center", marginTop: "5%"}}>
              <Grid item>
                <img src={'https://cdn-icons-png.flaticon.com/512/4826/4826313.png'} className={styles.image}/>
              </Grid>
              <Grid item className={styles.text}>
                <Typography variant={"h1"}>Page not found</Typography>
              </Grid>
            </Grid>
        </div>
    );
}