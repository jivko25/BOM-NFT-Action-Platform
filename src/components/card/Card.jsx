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
import Link from '../link/Link';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Card({name = '', likes, mediaUrl = '', 
                              user = {url: '/images/avatar.png',verified: false}, 
                              price = '', currency = '', timeLeft, ownerId, id}){
    const [productLikes, setProductLikes] = useState(likes);
    const [currentUser, setCurrentUser] = useState();
    const Completionist = () => <span>Time runs out!</span>;

    async function like(){
      const user = JSON.parse(sessionStorage.getItem('user')).data;
      const header = {
        'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
        'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
        'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
        'X-Parse-Revocable-Session' : '1',
        'Content-Type' : 'application/json'
      };
      if(!likes.includes(user.objectId)){
        likes.push(user.objectId);
      setProductLikes(likes);
      await axios.put(`${process.env.api}/classes/Nfts/${id}`, {"likes" : likes}, {headers: header})
      .catch((e) => console.log(e.response));
      addActivity()
      }
    }

    async function addActivity(){
      const header = {
        'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
        'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
        'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
        'X-Parse-Revocable-Session' : '1',
        'Content-Type' : 'application/json'
      }
      const nft = {
        "objectId" : id,
        "name" : name,
        "owner" : user
      }
      console.log({
        "user" : sessionStorage.getItem('user').data,
        "nft" : nft,
        "type" : "like"
      });
      await axios.post(`${process.env.api}/classes/Activity`, 
      {
        "user" : JSON.parse(sessionStorage.getItem('user')).data,
        "nft" : nft,
        "type" : "like"
      }, {headers: header})
      .catch((e) => console.log(e.response));
    }

    useEffect(() => {setCurrentUser(JSON.parse(sessionStorage.getItem('user'))?.data.objectId)}, [productLikes])


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
        <Link href={sessionStorage.getItem('user') ? `/product/${user.id}` : '/login'}>
        <CardHeader 
            avatar={<Avatar url={user.url} size={40} verified={user.verified} />} />
        </Link>
        <div>
        <Link href={sessionStorage.getItem('user') ? `/product/${id}` : '/login'}>
        <CardMedia 
            className={styles.media}
            component="img"
            image={mediaUrl}
            /> 
        </Link>
        {timeLeft > 0 ? <div className={styles.badge}>⚫ Live</div> : null}
        {timeLeft > 0 ? <div className={styles.countdown}><Countdown
        date={Date.now() + timeLeft * 1000}
        intervalDelay={10}
        precision={1}
        renderer={renderer}/>
        </div> : null}
        </div>
        <CardActions disableSpacing sx={{ padding: '0.25rem 1rem 1.375rem 1rem' }}>
                <div className={styles.cardAction}>
                    <span className={styles.title}>{name}</span>
                        <span className={styles.price}>{price} {currency}</span> 
                </div>
            <Chip 
                className={styles.likes} 
                icon={<FavoriteIcon onClick={like} className={window ? likes.includes(currentUser) ? styles.icon : null : null}/>} 
                label = {millify(likes.length)} 
                variant="outlined" 
                />
        </CardActions>
    </CardM>
    </div>
    );
}