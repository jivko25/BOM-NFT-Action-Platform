import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./Featured.module.scss"
import Link from 'next/link';
import React from "react";
import { useState } from "react";


export const Featured = React.memo(({items = []}) => {  
    const [width, setWidth] =  useState(window.innerWidth);

    window.addEventListener("resize", function () {
        setWidth(window.innerWidth);
    });
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
                        <ImageListItem key={item.image} 
                        cols={width < 700 ? item.cols*2 || 3 : item.cols || 1} 
                        rows={width < 700 ? item.rows*2 || 3 : item.rows || 1} 
                        id={item.id}>
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
});