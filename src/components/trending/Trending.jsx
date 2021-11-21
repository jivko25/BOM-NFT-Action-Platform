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
                <div className={["MuiCard-root"]}>
                <p>test</p>
                </div>
                <div className={["MuiCard-root"]}>
                <p>test</p>
                </div>
                <div className={["MuiCard-root"]}>
                <p>test</p>
                </div>
                <div className={["MuiCard-root"]}>
                <p>test</p>
                </div>
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
               
                <Grid container spacing={3}>
                    {(
                        cards.map(card => {
                            return  <Grid item xs={3} key={card.name}>
                                        <Card name = {card.name} likes = {card.likes} mediaUrl = {card.mediaUrl} user = {card.owner} price = {card.price} currency = {card.currency} timeLeft = {card.timeLeft} />
                                    </Grid >
                    }))}
                </Grid>
            </Container>
          );
}