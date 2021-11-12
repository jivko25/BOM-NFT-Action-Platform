import { FormControl, Grid, InputBase, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import styles from './ActivityFilters.module.scss';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function ActivityFilters({filters}){
    const [sortBy, setSortBy] = useState('');
    const [type, setType] = useState('');

    const handleChangeSort = (event) => {
        setSortBy(event.target.value);
    };

    const handleChangeType = (event) => {
        setType(event.target.value);
    };

    return(
        <div className={styles["activity-filters"]}>
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
                                filters.sort.map((item) => {
                                    return <MenuItem value={item.value}>{item.label}</MenuItem>
                                })
                            }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    {/* Type */}
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Type</InputLabel>
                            <Select
                            labelId="select-label"
                            id="select"
                            value={type}
                            label="Type"
                            onChange={handleChangeType}
                            variant={'outlined'}
                            color={'primary'}
                            >
                            {
                                filters.type.map((item) => {
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
                        className={styles.input}
                        />
                </Grid>
            </Grid>
        </div>
    );
}