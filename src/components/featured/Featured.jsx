import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./Featured.module.scss"
import Link from 'next/link';
import React from "react";
import { useState } from "react";


export const Featured = React.memo(({items = []}) => { 
    const router = useRouter()
    if (typeof window === "undefined") {
        return(
            <div></div>
        )
      }
    const [width, setWidth] =  useState(window.innerWidth);

    window.addEventListener("resize", function () {
        setWidth(window.innerWidth);
    });
    return (
        <div className={styles.wrapper}>
            <Container>
                <ImageList
                    cols={5}
                    rowHeight={120}
                    variant="quilted"
                    gap={20}
                >
                {items.map(item => (
                        <ImageListItem key={item.image} 
                        cols={width < 700 ? item.col*2 || 3 : item.col || 1} 
                        rows={width < 700 ? item.row*2 || 3 : item.row || 1}
                        onClick={() => router.push(item.image)}
                        id={item.objectId}>
                            <img 
                                className={styles.image}
                                src={item.image}
                            />
                        </ImageListItem>
                ))}
                </ImageList>
            </Container>
        </div>
    )
});