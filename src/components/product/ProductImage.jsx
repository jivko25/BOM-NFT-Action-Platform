import styles from './ProductImage.module.scss';

export default function ProductImage({url = ''}){
    return(
        <div className={"product-image"}>
            <img src={`${url}`} className={styles.image} />
        </div>
    );
}