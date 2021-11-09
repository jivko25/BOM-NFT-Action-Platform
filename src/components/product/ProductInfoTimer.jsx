import styles from "./ProductInfoTimer.module.scss"
import Countdown from 'react-countdown';

export default function ProductInfoTimer({timeEnd=null, onTimeEnd}){

    const Completionist = () => <p>{onTimeEnd}</p>;

    const render = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
            <p>
              {hours}:{minutes}:{seconds}
            </p>
          );
        }
      };

    return (
        <div 
            className={`${styles["product-info-timer"]} ${timeEnd && styles.active}`}>
            <div className={styles.header}>
                <p className={styles.title}>Ends in</p>
            </div>
            <div className={styles.timer}>
                { timeEnd != null & timeEnd > 0 ? (
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