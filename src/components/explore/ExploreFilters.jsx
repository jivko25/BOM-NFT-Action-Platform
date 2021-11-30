import { useState } from 'react';
import { Grid, InputBase, TextField, Typography, FormControl, Select, MenuItem, InputLabel, Box, Stack, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './ExploreFilters.module.scss';

export default function ExploreFilters({sort, price}){
    const [sortBy, setSortBy] = useState('');
    const [priceBy, setPrice] = useState('');

    const handleChangeSort = (event) => {
        setSortBy(event.target.value);
    };

    const handleChangePriceBy = (event) => {
        setPrice(event.target.value);
    };

    return(
        <div className={styles["explore-filters"]}>
            <Grid container spacing={2}>
                {/* <Grid item xs={5}>
                    <Typography variant={'h2'}>Collection</Typography>
                </Grid> */}
                <Grid item xs={4}>
                    {/* Sort by */}
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Sort by</InputLabel>
                            <Select
                            labelId="select-label"
                            id="select"
                            value={sortBy}
                            label="Sort by"
                            onChange={handleChangeSort}
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
                            value={priceBy}
                            label="Price range"
                            onChange={handleChangePriceBy}
                            variant={'outlined'}
                            color={'primary'}
                            >
                            {
                                price.map((item) => {
                                    return <MenuItem value={item.value}>{item.label}</MenuItem>
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
            <Stack></Stack>
            <InputAdornment></InputAdornment>
        </div>
    );
}