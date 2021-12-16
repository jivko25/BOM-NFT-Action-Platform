import { Grid } from '@mui/material';
import styles from './ActivityListItem.module.scss';
import Avatar from '../avatar/Avatar';
import { formatDistance, parseISO } from 'date-fns';
import Link from '../link/Link';
// import { Link } from "react-router-dom";

export default function ActivityListItem({created_at, user, nft, type = "like"}){
    return(
        <div className={styles["activity-list-item"]}>
            <Grid container>
                <Grid item xs={4} lg={3} className={styles.avatar}>
                    <Avatar url={user.avatar.url} verified={user.confirmed} size={70}/>
                </Grid>
                <Grid item xs={8} lg={9}>
                    <p>{nft.owner.username} {type}  
                    &ensp;
                    <Link href="/">
                    "{nft.name}"
                    </Link>
                    &ensp;by&ensp;
                     <Link href="/">
                     {user.name}
                     </Link>
                     </p>
                     <p>
                        {
                        formatDistance(
                            parseISO(created_at),
                            Date.now(),
                            { addSuffix: true }
                        )
                        }
                     </p>
                </Grid>
            </Grid>
        </div>
    );
}