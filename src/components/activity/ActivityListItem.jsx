import { Grid } from '@mui/material';
import styles from './ActivityListItem.module.scss';
import Avatar from '../avatar/Avatar';
import { formatDistance, parseISO } from 'date-fns';
import Link from '../link/Link';
// import { Link } from "react-router-dom";

export default function ActivityListItem({created_at, user, nft, type = "like"}){
    console.log(user);
    return(
        <div className={styles["activity-list-item"]}>
            <Grid container>
                <Grid item xs={3} lg={3} className={styles.avatar}>
                    <Link href={`/profile/${user.id}`}>
                    <Avatar url={user.url} verified={user.confirmed} size={70}/>
                    </Link>
                </Grid>
                <Grid item xs={9} lg={9}>
                    <p>{user.username} {type}  
                    &ensp;
                    <Link href={`/product/${nft.objectId}`}>
                    "{nft.name}"
                    </Link>
                    &ensp;by&ensp;
                     <Link href={`/profile/${user.id}`}>
                     {nft.owner.username}
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