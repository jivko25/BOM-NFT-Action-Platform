import { useState } from 'react';
import { Grid, InputBase, TextField, Typography, FormControl, Select, MenuItem, InputLabel, Box, Stack} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './ProfileCollectionFilters.module.scss';

export default function ProfileCollectionFilters({sort, price, sortFilterValue, priceFilterValue, onChangeSortFilterValue, onChangePriceFilterValue}){
    const [sortBy, setSortBy] = useState('');
    const [range, setRange] = useState('');
    
    const handleChangeSort = (event) => {
        setSortBy(event.target.value);
    };

    const handleChangeRange = (event) => {
        setRange(event.target.value);
    };

    return(
        <div className={styles["profile-collection-filters"]}>
            <Grid container spacing={2} justifyContent={"center"}>
                <Grid item xs={10} lg={3}>
                    {/* Sort by */}
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Sort by</InputLabel>
                            <Select
                            labelId="select-label"
                            id="select"
                            value={sortFilterValue}
                            label="Sort by"
                            onChange={onChangeSortFilterValue}
                            variant={'outlined'}
                            color={'primary'}
                            >
                            {
                                sort?.map((item) => {
                                    return <MenuItem value={item.value}>{item.label}</MenuItem>
                                })
                            }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={10} lg={3}>
                    {/* Price range */}
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Price range</InputLabel>
                            <Select
                            labelId="select-label"
                            id="select"
                            value={priceFilterValue}
                            label="Price range"
                            onChange={onChangePriceFilterValue}
                            variant={'outlined'}
                            color={'primary'}
                            >
                            {
                                price?.map((item) => {
                                    return <MenuItem value={item.value}>{item.label}</MenuItem>
                                })
                            }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={10} lg={3}>
                    {/* Search */}
                    <TextField
                        label={<SearchIcon/>}
                        className={styles["MuiInputAdornment-standard"]}
                        fullWidth
                        />
                </Grid>
            </Grid>
        </div>
    );
}