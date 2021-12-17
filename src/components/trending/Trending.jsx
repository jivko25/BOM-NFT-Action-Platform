import React, { useState } from "react"
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import styles from "./Trending.module.scss";
import Card from "../card/Card"
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";
import Link from 'next/link';
import Spacer from "../spacer/Spacer";

export default function Trending({cards = [], filters = [], filterValue, onChangeFilterValue}){
    
        return (
            <Container className={styles.container} maxWidth="xl" >
                <Grid container spacing={12}>
                    <Grid item xs={6} sm={6} md={6} xl={9}>
                        <h1>Trending</h1>
                    </Grid >
                    <Grid item xs={6} sm={6} md={6} xl={3}>
                      <Select 
                      className={styles.select} 
                      label="Age"
                      value={filterValue}
                      onChange={onChangeFilterValue}>
                          {filters.map(filter => {
                                return <MenuItem key = {filter.value} value={filter.value}>{filter.label}</MenuItem>
                          })
                          }
                      </Select>
                    </Grid >
                </Grid>
                {cards.length > 0 ? 
                <Grid container spacing={1} justifyContent="center">
                    {cards.map((card) => {
                        return (
                            <Link href={`/product/${card.id}`} key={card.id}>
                                <Grid item xs={11} md={6} xl={3}>
                                    <Card
                                    {...card}
                                    mediaUrl={card.source.url}
                                    user={{avatarUrl: card.owner.avatar.url, verified: card.owner.verified}}
                                    ownerId = {card.owner.id}
                                    />
                                </Grid>
                            </Link>
                        )
                    })}
                </Grid>
                :
                <Spacer/>
                }
            </Container>
          );
}