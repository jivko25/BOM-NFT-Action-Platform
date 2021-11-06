import Container from "@mui/material/Container";
import styles from "./TopCollectors.module.scss";
import Card from "../card/Card"
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";
import Collector from "./Collector";
import React, { useState } from "react"
import CollectorColumn from "./CollectorColumn";
import _ from "lodash";
import { chunk } from "lodash";

const options = ["Today", "This week", "This month"];

export default function TopCollectors({collectors = []}){
        const [timeOption, setTimeOption] = useState(options[0]);

        const res = collectors.sort((a, b) => b.nftsCount - a.nftsCount).map((element, idx) => ({
            ...element,
            id: idx + 1,
          }));

        const collectorChunks = _.chunk(res, 3);

        return (
            <Container className={styles.container} maxWidth="xl">
                <Grid container spacing={12}>
                    <Grid item xs={10}>
                        <h1>Top Collectors</h1>
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
                <Grid item className={styles.collectorColumns}>
                {collectorChunks.map((chunk, idx) => {
                    return (
                    <CollectorColumn items={chunk} />
                );
            })}
                 </Grid>
            </Container>
          );
}