import { useState } from 'react';
import { Grid, InputBase, TextField, Typography, FormControl, Select, MenuItem, InputLabel, Box, Stack, InputAdornment, onPriceFilterChange, onSortFilterChange} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './ExploreFilters.module.scss';

export default function ExploreFilters({sort, price, onPriceFilterChange, onSortFilterChange, sortValue, priceValue}){

    return(
        <div className={styles["explore-filters"]}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    {/* Sort by */}
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Sort by</InputLabel>
                            <Select
                            labelId="select-label"
                            id="select"
                            value={sortValue}
                            label="Sort by"
                            onChange={onSortFilterChange}
                            variant={'outlined'}
                            color={'primary'}
                            >
                            {
                                sort.map((item) => {
                                    return <MenuItem value={item.value}>{item.label}</MenuItem>
                                })
                            }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    {/* Price range */}
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Price range</InputLabel>
                            <Select
                            labelId="select-label"
                            id="select"
                            value={priceValue}
                            label="Price range"
                            onChange={onPriceFilterChange}
                            variant={'outlined'}
                            color={'primary'}
                            >
                            {
                                price.map((item) => {
                                    return <MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>
                                })
                            }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    {/* Search */}
                    <TextField
                        label={<SearchIcon/>}
                        className={styles["MuiInputAdornment-standard"]}
                        />
                </Grid>
            </Grid>
        </div>
    );
}