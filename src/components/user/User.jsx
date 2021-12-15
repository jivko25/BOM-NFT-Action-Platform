import styles from './User.module.scss';
import Avatar  from '../avatar/Avatar';
import { Typography } from '@mui/material';

export default function User({name = '', info = '', avatar = '', size = 55, verified = false}){
    return(
        <div className={styles.user}>
            <Avatar url={avatar} size={size} verified={verified}/>
            <div className={styles.infoDiv}>
                <Typography variant="p" className={styles.name} noWrap>{name}</Typography>
                <Typography variant="p" className={styles.info} noWrap>{info}</Typography>
            </div>
        </div>
    )
}
//Backup
{/* <p className={styles.name}>{name}</p>
<p className={styles.info}>{info}</p> */}