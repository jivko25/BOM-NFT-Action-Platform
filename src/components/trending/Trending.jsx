import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Trending.module.scss";
import Card from "../card/Card"
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";

const options = ["Today", "This week", "This month"];

export default function Trending({cards = []}){
        const [timeOption, setTimeOption] = useState(options[0]);

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
                          {options.map(option => {
                                return <MenuItem key = {option} value={option}>{option}</MenuItem>
                          })
                          }
                      </Select>
                    </Grid >
                </Grid>
               
                <Grid container spacing={3}>
                    {(
                        cards.map(card => {
                            return   <Grid item xs={3}>
                                        <Card {...card} />
                                    </Grid >
                    }))}
                </Grid>
            </Container>
          );
}