import { useState } from 'react';
import { Grid, InputBase, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './ProfileCollectionFilters.module.scss';

export default function ProfileCollectionFilters({filters}){
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
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Typography variant={'h2'}>Collection</Typography>
                </Grid>
                <Grid item xs={2}>
                    {/* Sort by */}
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortBy}
                            label="Sort by"
                            onChange={handleChangeSort}
                            variant={'outlined'}
                            color={'primary'}
                            >
                            {
                                filters.sort.map((item) => {
                                    return <MenuItem value={item.value}>{item.label}</MenuItem>
                                })
                            }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    {/* Price range */}
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Price range</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={range}
                            label="Price range"
                            onChange={handleChangeRange}
                            variant={'outlined'}
                            color={'primary'}
                            >
                            {
                                filters.price.map((item) => {
                                    return <MenuItem value={item.value}>{item.label}</MenuItem>
                                })
                            }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    {/* Search */}
                    <InputBase
                            startAdornment={<SearchIcon/>}
                        />
                </Grid>
            </Grid>
        </div>
    );
}