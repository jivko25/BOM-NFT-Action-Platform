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


export default function TopCollectors({collectors = [], filters = [], onChangeFilterValue, filterValue}){
        const [timeOption, setTimeOption] = useState();

        const res = collectors.map((element, idx) => ({
            ...element,
            profileId : element.id,
            id: idx + 1,
          }));

        const collectorChunks = _.chunk(res, 3);

        return (
            <Container className={styles.container} maxWidth="xl">
                <Grid container spacing={12}>
                    <Grid item xs={9}>
                        <h1>Top Collectors</h1>
                    </Grid >
                    <Grid item xs={3}>
                      <Select 
                      className={styles.select}
                      labelId="select-label"
                      id="select"
                      value={filterValue}
                      label="Select"
                      onChange={onChangeFilterValue}
                      variant={'outlined'}
                      color={'primary'}
                      >
                          {filters.map((option) => {
                                return <MenuItem key = {option.label} value={option.value}>{option.label}</MenuItem>
                          })
                          }
                      </Select>
                    </Grid >
                </Grid>
                <Grid item className={styles.collectorColumns}>
                    {/* <Grid container> */}
                      
                {collectorChunks.map((chunk, idx) => {
                    return (
                        // <Grid item xs={12}>

                            <CollectorColumn items={chunk} key={idx}/>
                        // </Grid>
                );
                })}
                {/* </Grid> */}
                 </Grid>
            </Container>
          );
}