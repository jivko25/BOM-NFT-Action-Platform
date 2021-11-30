import styles from "./ProductInfoTimer.module.scss"
import Countdown from 'react-countdown';
// import {timeInSeconds} from '../../helpers/timeConvertor.js';

export default function ProductInfoTimer({timeEnd=0 , onTimeEnd}){

    const Completionist = () => <p>{onTimeEnd}</p>;

    const render = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
            <p>
              {days}:{hours}:{minutes}:{seconds}
            </p>
          );
        }
      };
      // const time = Date.parse(timeEnd)/1000;
      // console.log(time);
    return (
        <div 
            className={`${styles["product-info-timer"]} ${timeEnd && styles.active}`}>
            <div className={styles.header}>
                <p className={styles.title}>Ends in</p>
            </div>
            <div className={styles.timer}>
                { timeEnd != null ? (
                <Countdown
                onComplete= {() => {onTimeEnd}}
                date={Date.now() + timeEnd * 1000}
                intervalDelay={10}
                precision={1}
                renderer={render}
                className={styles.text}/>
                ): null}
            </div>
        </div>
    )
}