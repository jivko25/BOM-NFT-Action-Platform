import styles from './User.module.scss';
import Avatar  from '../avatar/Avatar';

function User({name = '', info = '', avatar = '', size = 55, verified = false}){
    return(
        <div className={styles.user}>
            <Avatar url={avatar} size={size} verified={verified}/>
            <div className={styles.infoDiv}>
                <p className={styles.name}>{name}</p>
                <p className={styles.info}>{info}</p>
            </div>
        </div>
    )
}

export default User;