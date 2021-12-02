import { styled } from '@mui/material/styles';
import CardM from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from '@mui/material/Chip';
import styles from './Card.module.scss';
import Avatar from '../avatar/Avatar';
import millify from 'millify';
import Countdown from 'react-countdown';

export default function Card({name = '', likes = 0, mediaUrl = '', 
                              user = {avatarUrl: '/images/avatar.png',verified: false}, 
                              price = '', currency = '', timeLeft}){
    const Completionist = () => <span>Time runs out!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
            <span>
              {days}:{hours}:{minutes}:{seconds}
            </span>
          );
        }
      };

    return(
    <div>
    <CardM className={timeLeft > 0 ? styles.cardActive : styles.card}>
        <CardHeader 
            // avatar={<Avatar url={user.avatarUrl} size={40} verified={user.verified} />} />
            avatar={<Avatar url={user.avatarUrl} size={40} verified={user.verified} />} />
        <CardMedia 
            className={styles.media}
            component="img"
            image={mediaUrl}
            /> 
        {timeLeft > 0 ? <div className={styles.badge}>⚫ Live</div> : null}
        {timeLeft > 0 ? <div className={styles.countdown}><Countdown
    date={Date.now() + timeLeft * 1000}
    intervalDelay={10}
    precision={1}
    renderer={renderer}/>
    </div> : null}
        <CardActions disableSpacing sx={{ padding: '0.25rem 1rem 1.375rem 1rem' }}>
                <div className={styles.cardAction}>
                    <span className={styles.title}>{name}</span>
                        <span className={styles.price}>{price} {currency}</span> 
                </div>
            <Chip 
                className={styles.likes} 
                icon={<FavoriteIcon className={likes > 0 ? styles.icon : null}/>} 
                label = {millify(likes)} 
                variant="outlined" />
        </CardActions>
    </CardM>
    </div>
    );
}