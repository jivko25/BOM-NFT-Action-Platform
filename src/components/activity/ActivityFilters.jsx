import { FormControl, Grid, InputBase, InputLabel, Link, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import styles from './ActivityFilters.module.scss';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function ActivityFilters({sort, type}){
    const [sortBy, setSortBy] = useState('');
    const [typeBy, setType] = useState('');

    const handleChangeSort = (event) => {
        setSortBy(event.target.value);
    };

    const handleChangeTypeBy = (event) => {
        setType(event.target.value);
    };

    return(
        <div className={styles["activity-filters"]}>
            <Grid container spacing={2}>
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
                                sort.map((item, index) => {
                                    return <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
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
                            value={typeBy}
                            label="Type"
                            onChange={handleChangeTypeBy}
                            variant={'outlined'}
                            color={'primary'}
                            >
                            {
                                type.map((item, index) => {
                                    return <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
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