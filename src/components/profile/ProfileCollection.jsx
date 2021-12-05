import { Container, Grid, Typography } from '@mui/material';
import ProfileCollectionFilters from './ProfileCollectionFilters';
import styles from './ProfileCollection.module.scss';
import Card from '../card/Card';
import Link from 'next/link';

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
                        <ProfileCollectionFilters sort={filters?.sort} price={filters?.price}/>
                    </Grid>
                </Grid>
                <Grid container>
                    {
                        items?.map((item, key) => {
                            return (
                                <Link href={`/product/${item.id}`}>
                            <Grid key={key} item xs={12} sm={3}>
                                <Card
                                {...item}
                                mediaUrl={item.source.url}
                                user={{avatarUrl: item.owner.avatar.url, verified: item.owner.verified, id: item.owner.id}}
                                ownerId = {item.owner.id}
                                />
                            </Grid>
                                </Link>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </div>
    );
}