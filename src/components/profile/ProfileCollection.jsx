import { Container, Grid, Typography } from '@mui/material';
import ProfileCollectionFilters from './ProfileCollectionFilters';
import styles from './ProfileCollection.module.scss';
import Card from '../card/Card';
import Link from 'next/link';
import Spacer from '../spacer/Spacer';

export default function ProfileCollection({user, filters, items, sortFilterValue, priceFilterValue, onChangeSortFilterValue, onChangePriceFilterValue}){
    return(
        <div className={styles['profile-collection']}>
            <Grid container>
                <Grid container>
                    <Grid item xs={12}>
                        <ProfileCollectionFilters sort={filters?.sort} price={filters?.price} sortFilterValue={sortFilterValue} priceFilterValue={priceFilterValue} onChangeSortFilterValue={onChangeSortFilterValue} onChangePriceFilterValue={onChangePriceFilterValue}/>
                    </Grid>
                </Grid>
                {items?.length > 0 ? 
                <Grid container>
                    {
                        items?.map((item, key) => {
                            console.log(item.objectId);
                            return (
                                // <Link href={`/product/${item.objectId}`}>
                            <Grid key={item.objectId} item xs={11} sm={6} md={4} xl={3}>
                                <Card
                                {...item}
                                mediaUrl={item.image}
                                user={item.owner}
                                ownerId = {item.owner.id}
                                id={item.objectId}
                                />
                            </Grid>
                                // </Link>
                            )
                        })
                    }
                </Grid>
                :
                <Container className={styles.spacer}>
                <Spacer/>
                </Container>
                }
            </Grid>
        </div>
    );
}