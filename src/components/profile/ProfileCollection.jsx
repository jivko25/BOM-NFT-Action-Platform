import { Container, Grid, Typography } from '@mui/material';
import ProfileCollectionFilters from './ProfileCollectionFilters';
import styles from './ProfileCollection.module.scss';
import Card from '../card/Card';

export default function ProfileCollection({user, filters, items}){
    return(
        <div className={styles['profile-collection']}>
            <Grid container>
                <Grid container>
                    <Grid item xs={3}>
                        <Typography variant={'h3'}>
                            Collection
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <ProfileCollectionFilters filters={filters}/>
                    </Grid>
                </Grid>
                <Grid container>
                    {
                        items.map(item => {
                            return <Grid item xs={3}>
                                <Card name = {item.name} likes = {item.likes}  mediaUrl = {item.source.formats.thumbnail.url}  user={user}  price = {item.price}  currency = {item.currency} timeLeft={50}/>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </div>
    );
}