import styles from './Featured.module.scss';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/material';
import { useRouter } from 'next/router'

export default function Featured({items = []}){
    const router = useRouter()

    const handleClick = (href) => {
        router.push(href)
      }

    return (
      <Container>
        <ImageList className={styles.wrapper}>
          {items.map((item, index) => (
            index == 0 ?
            <ImageListItem key={item.img} className ={styles.first_image}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
                onClick={() => handleClick(item.href)}
              />
            </ImageListItem> :
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
                onClick={() => handleClick(item.href)}
                className ={styles.image}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      );
}