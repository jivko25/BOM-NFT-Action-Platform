import styles from './User.module.scss';
import Avatar  from '../avatar/Avatar';
import { Typography, Grid } from '@mui/material';

export default function User({name = '', info = '', avatar = '', size = 55, verified = false, variant = 'normal'}){
    return(
        // <div className={styles.user}>
        //     <Avatar url={avatar} size={size} verified={verified}/>
        //     <div className={styles.infoDiv}>
        //         <Typography variant="p" className={styles.name} noWrap>{name}</Typography>
        //         <Typography variant="p" className={styles.info} noWrap>{info}</Typography>
        //     </div>
        // </div>
        <div>
            <Grid container spacing={3}>
              <Grid item xs={3} >
                <Avatar url={avatar} size={size} verified={verified}/>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="p" className={variant == 'normal' ? styles.name : variant = 'large' ? styles.largeName : styles.smallName}>{name}</Typography>
                {/* <p className={styles.name}>{name}</p> */}
                <Typography variant="p" className={styles.info} noWrap>{info}</Typography>
              </Grid>
            </Grid>
        </div>
    )
}
//Backup
{/* <p className={styles.name}>{name}</p>
<p className={styles.info}>{info}</p> */}