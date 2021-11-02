import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Auctions.module.scss";
import Card from "../card/Card"
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";

const options = ["Today", "This week", "This month"];

export default function Auctions({cards = []}){
        const [timeOption, setTimeOption] = useState(options[0]);

        return (
            <Container className={styles.container} maxWidth="xl">
                <Grid container spacing={12}>
                    <Grid item xs={10}>
                        <h1>Live Auctions</h1>
                    </Grid >
                    <Grid item xs={2}>
                      <Select className={styles.select} label="Age"
                      value={timeOption}
                      onChange={(event) => {
                        setTimeOption(event.target.value)
                      }}>
                          {options.map(option => {
                                return <MenuItem key = {option} value={option}>{option}</MenuItem>
                          })
                          }
                      </Select>
                    </Grid >
                </Grid>
               
                <Grid container spacing={3}>
                    {(
                        cards.filter(card => card.timeLeft > 0).map(card => {
                            return   <Grid item xs={3} key={card.name}>
                                        <Card {...card} />
                                    </Grid >
                    }))}
                </Grid>
            </Container>
          );
}