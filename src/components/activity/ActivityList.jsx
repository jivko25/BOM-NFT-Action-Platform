import { Stack, Item } from '@mui/material';
import styles from './ActivityList.module.scss';
import ActivityListItem from './ActivityListItem';

export default function ActivityList({items = []}){
    console.log(items.createdAt);
    return(
        <div className={styles["activity-list"]}>
            <Stack spacing={2} direction={"column"}>
                {
                    items?.map((item, index) => {
                        
                        // <Item>
                        return    <ActivityListItem 
                            created_at={item.createdAt} 
                            user={item.user}
                            nft={item.nft}
                            type={item.type}
                            className={styles.item}
                            key={index}
                            />
                        // </Item>
                    })
                }
            </Stack>
        </div>
    );
}