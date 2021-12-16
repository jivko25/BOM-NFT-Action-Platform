import styles from './Spacer.module.scss';
import Grid from '@mui/material/Grid';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Typography } from '@mui/material';

export default function Spacer({item = 'Items', variant = "h1"}){
    return(
        <div>
            <Grid container justifyContent={"center"} style={{"textAlign" : "center"}}>
              <Grid item>
                <SearchOffIcon sx={{ fontSize: 100 }}/>
              </Grid>
              <Grid item>
                <Typography variant={variant}>{item} not found</Typography>
              </Grid>
            </Grid>
        </div>
    );
}