import Container from "@mui/material/Container";
import styles from "./TopCollectors.module.scss";
import Select from '@mui/material/Select';
import { FormControl, Grid } from "@mui/material";
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
            <Container className={styles.container}>
                <Grid container spacing={1} justifyContent={"center"}>
                    <Grid item xs={10} lg={9}>
                        <h1 className={styles.title}>Top Collectors</h1>
                    </Grid >
                    <Grid item xs={10} sm={6} lg={3} justifyContent={"center"}>
                    <FormControl fullWidth>
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
                    </FormControl>
                    </Grid >
                </Grid>
                {collectors.length > 0 ?
                <Grid container spacing={1} justifyContent="center">
                {collectorChunks.map((chunk, idx) => {
                    return (
                        <Grid item xs={11} md={6} xl={3} key={idx} justifyContent="center" className={styles.collectorColumns}>
                            <CollectorColumn items={chunk} key={idx}/>
                        </Grid>
                );
                })}
                 </Grid>
                 :
                 <Spacer item="Collectors"/>
                }
            </Container>
          );
})