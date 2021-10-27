import { styled } from '@mui/material/styles';
import CardM from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from '@mui/material/Chip';
import styles from './Card.module.scss';
import Avatar from '../avatar/Avatar';
import millify from "millify";

function Card({name, likes = 0, mediaUrl, user, price, currency}){
    return(
    <CardM className={styles.card}>
        <CardHeader 
            avatar={<Avatar url={user.avatarUrl} size={40} verified={user.verified} />} />
        <CardMedia 
            className={styles.media}
            component="img"
            image={mediaUrl}
            />
        <CardActions disableSpacing sx={{ padding: '0.25rem 1rem 1.375rem 1rem' }}>
                <div className={styles.cardAction}>
                    <span className={styles.title}>{name}</span>
                    {price.includes(".") ?
                        <span className={styles.price}>~{price} {currency}</span> :
                        <span className={styles.price}>{price} {currency}</span>
                    }
                </div>
            <Chip 
                className={styles.likes} 
                icon={<FavoriteIcon className={likes > 0 ? styles.icon : null}/>} 
                label={millify(likes, { lowercase: true })} 
                variant="outlined" />
        </CardActions>
    </CardM>
    );
}

// function kFormatter(num) {
//     if(num > 999999999){
//         return Math.sign(num)*((Math.abs(num)/1000000000).toFixed(1)) + 'B';
//     }
//     else if(num > 999999){
//         return Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M';
//     }
//     else if(num > 999){
//         return Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K';
//     }
//     else{
//         return num;
//     }
// }

export default Card;