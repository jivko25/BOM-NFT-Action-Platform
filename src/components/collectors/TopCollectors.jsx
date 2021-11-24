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


export default function TopCollectors({collectors = [], filters = []}){
        const [timeOption, setTimeOption] = useState();

        const res = collectors.map((element, idx) => ({
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
                          {filters.map((option) => {
                                return <MenuItem key = {option.label} value={option.value}>{option.label}</MenuItem>
                          })
                          }
                      </Select>
                    </Grid >
                </Grid>
                <Grid item className={styles.collectorColumns}>
                {collectorChunks.map((chunk, idx) => {
                    return (
                    <CollectorColumn items={chunk} key={idx}/>
                );
                })}
                 </Grid>
            </Container>
          );
}