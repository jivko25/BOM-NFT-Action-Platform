import styles from './ProductImage.module.scss';

export default function ProductImage(URL = ''){
    return(
        <div className={styles.product-image}>
            <img src={utl} className={styles.image}/>
        </div>
    );
}