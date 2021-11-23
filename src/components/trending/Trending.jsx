import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Trending.module.scss";
import Card from "../card/Card"
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function Trending({cards = [], filters = []}){
        const [timeOption, setTimeOption] = useState();

        return (
            <Container className={styles.container} maxWidth="xl">
                <Grid container spacing={12}>
                    <Grid item xs={10}>
                        <h1>Trending</h1>
                    </Grid >
                    <Grid item xs={2}>
                      <Select className={styles.select} label="Age"
                      value={timeOption}
                      onChange={(event) => {
                        setTimeOption(event.target.value)
                      }}>
                          {filters.map(filter => {
                                return <MenuItem key = {filter.value} value={filter.value}>{filter.label}</MenuItem>
                          })
                          }
                      </Select>
                    </Grid >
                </Grid>
               
                <Grid container spacing={1} justifyContent="center">
                    {cards.map((card, key) => {
                        return (
                        <Grid key={key} item xs={12} sm={3}>
                            <Card
                            {...card}
                            mediaUrl={card.source.url}
                            user={{avatarUrl: card.owner.avatar.url, verified: card.owner.verified}}
                            />
                        </Grid>
                        )
                    })}
                </Grid>
            </Container>
          );
}