import Container from "@mui/material/Container";
import styles from "./TopCollectors.module.scss";
import Select from '@mui/material/Select';
import { Grid } from "@mui/material";
import { MenuItem } from "@mui/material";
import React, { useState } from "react"
import CollectorColumn from "./CollectorColumn";
import _ from "lodash";
import Spacer from "../spacer/Spacer";


export const TopCollectors = React.memo(({collectors = [], filters = [], onChangeFilterValue, filterValue}) => {

        const res = collectors.map((element, idx) => ({
            ...element,
            profileId : element.id,
            id: idx + 1,
          }));

        const collectorChunks = _.chunk(res, 3);

        return (
            <Container className={styles.container} maxWidth="xl">
                <Grid container spacing={1} justifyContent={"center"}>
                    <Grid item xs={8} xl={9}>
                        <h1>Top Collectors</h1>
                    </Grid >
                    <Grid item xs={4} xl={3}>
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
                {collectors.length > 0 ?
                <Grid item className={styles.collectorColumns}>
                    <Grid container spacing={4} justifyContent={"center"}>
                      
                {collectorChunks.map((chunk, idx) => {
                    return (
                        <Grid item xs={10} md={5} xl={3} key={idx}>
                            <CollectorColumn items={chunk} key={idx}/>
                        </Grid>
                );
                })}
                </Grid>
                 </Grid>
                 :
                 <Spacer item="Collectors"/>
                }
            </Container>
          );
})