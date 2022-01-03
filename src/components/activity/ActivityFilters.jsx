import { FormControl, Grid, InputBase, InputLabel, Link, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import styles from './ActivityFilters.module.scss';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function ActivityFilters({sort, type, onSortFilterChange, onTypeFilterChange, onSearchChange, sortValue, typeValue}){
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
            <Grid container spacing={2} justifyContent={"center"}>
                <Grid item xs={10} lg={3}>
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
                                sort.map((item, index) => {
                                    return <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
                                })
                            }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={10} lg={3}>
                    {/* Type */}
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Type</InputLabel>
                            <Select
                            labelId="select-label"
                            id="select"
                            value={typeValue}
                            label="Type"
                            onChange={onTypeFilterChange}
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
                <Grid item xs={10} lg={3}>
                    {/* Search */}
                    <TextField
                        label={<SearchIcon/>}
                        className={styles.input}
                        onChange={onSearchChange}
                        fullWidth
                        />
                </Grid>
            </Grid>
        </div>
    );
}