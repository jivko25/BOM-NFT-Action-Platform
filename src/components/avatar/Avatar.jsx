import styles from '../avatar/Avatar.module.scss';

export default function Avatar({size = 90, url, verified = false}){
    return(
        <div style={{width: size, height: size}} className={styles.avatar}>
            <img src = {url} className={styles.image}/>
            {verified ? <img src = '/images/verified.svg' className={styles.badge}/> : null}
        </div>
    )
}