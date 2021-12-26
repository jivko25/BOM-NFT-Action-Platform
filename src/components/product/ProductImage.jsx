import styles from "./ProductImage.module.scss"

export default function ProductImage({url}){
    console.log(url);
    return (
        <div className={styles["product-image"]}>
            <img className={styles["image"]} src={url}/>
        </div>
    )
}