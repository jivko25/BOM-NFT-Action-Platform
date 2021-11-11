import styles from './ProfileUser.module.scss';
import Avatar from '../avatar/Avatar';
import { Typography } from '@mui/material';

export default function ProfileUser({name = '', verified = false, avatar = '', info = ''}){
    return(
        <div styles={styles["profile-user"]}>
            <Avatar url = {avatar} size={120} verified={verified} className={styles.image}/>
            <Typography variant={'h3'} className={styles.name}>
                {name}
            </Typography>
            <Typography variant={'body1'} className={styles.info}>
                {info}
            </Typography>
        </div>
    );
}