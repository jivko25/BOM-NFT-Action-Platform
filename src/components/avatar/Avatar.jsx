import styles from './Avatar.module.scss';

function Avatar({size = 90, url, verified = false}){
    return(
        <div style={{width: size, height: size}} className={styles.avatar}>
            <img src = {url} alt = "avatar" className={styles.image}></img>
            {verified ? <img src = '/images/verified.svg' className={styles.badge}></img> : null}
        </div>
    )
}

export default Avatar;