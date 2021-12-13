import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./Featured.module.scss"
import Link from 'next/link';


export default function Featured({items = []}){

    // const router = useRouter();
    // const changeRoute = path => router.push(path);

    // const handleClick = (id) => {
    //     router.push(`localhost:3000/product/${id}`)
    // }
    
    return (
        <div className={styles.wrapper}>
            <Container>
                <ImageList
                    cols={6}
                    variant="quilted"
                    gap={20}
                >
                {items.map(item => (
                        <Link href={`/product/${item.id}`} key={item.id}>
                        <ImageListItem key={item.image} cols={item.cols || 1} rows={item.rows || 1} id={item.id}>
                            <img 
                                className={styles.image}
                                src={item.image}
                            />
                        </ImageListItem>
                        </Link>
                ))}
                </ImageList>
            </Container>
        </div>
    )
}