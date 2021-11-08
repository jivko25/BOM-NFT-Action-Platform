import styles from './ProductImage.module.scss';

export default function ProductImage({url = ''}){
    return(
        <div className={styles.product_image}>
            <img src={`${url}`} className={styles.image} />
        </div>
    );
}