import styles from './Spacer.module.scss';
import Grid from '@mui/material/Grid';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Typography } from '@mui/material';

export default function Spacer({item = 'Items'}){
    return(
        <div>
            <Grid container justifyContent={"center"} style={{"textAlign" : "center"}}>
              <Grid item>
                <SearchOffIcon sx={{ fontSize: 100 }}/>
              </Grid>
              <Grid item>
                <Typography variant={"h1"}>{item} not found</Typography>
              </Grid>
            </Grid>
        </div>
    );
}