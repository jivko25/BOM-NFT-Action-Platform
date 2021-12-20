import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Auctions.module.scss";
import Card from "../card/Card"
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";
import Link from 'next/link';
import Spacer from '../spacer/Spacer';


export const Auctions = React.memo(({cards = [], filters = [], onChangeFilterValue, filterValue}) => {
        const [timeOption, setTimeOption] = useState();

        return (
            <Container className={styles.container} maxWidth="xl">
                <Grid container spacing={12}>
                    <Grid item xs={8} xl={9}>
                        <h1>🔥Live Auctions</h1>
                    </Grid >
                    <Grid item xs={4} xl={3}>
                      <Select className={styles.select} label="Age"
                      value={filterValue}
                      onChange={onChangeFilterValue}>
                          {filters.map(option => {
                                return <MenuItem key = {option.label} value={option.value}>{option.label}</MenuItem>
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
                                    <Card className={styles.item}
                                    {...card}
                                    mediaUrl={card.source.url}
                                    user={{avatarUrl: card.owner.avatar.url, verified: card.owner.verified}}
                                    ownerId = {card.owner.id}
                                    timeLeft={(new Date(card.auction_end).getTime() - Date.now())/1000}
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
})