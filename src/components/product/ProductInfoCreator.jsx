import styles from "./ProductInfoCreator.module.scss"
import User from "../../components/user/User"
import Link from 'next/link';

export default function ProductInfoCreator({name, avatar, verified=false, ownerId}){
    return (
        <div className={styles["product-info-creator"]}>
            <div className={styles["title-container"]}>
                <p className={styles.title}>Creator</p>
            </div>
                <Link href={`/profile/${ownerId}`}>
            <div className={styles["user-container"]}>
                <User name={name} size={50} avatar={avatar} verified={verified} variant="large"/>
            </div>
                </Link>
        </div>
    )
}