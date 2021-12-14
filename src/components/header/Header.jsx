import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from '../logo/Logo.jsx'
import InputBase from '@mui/material/InputBase';
import styles from './Header.module.scss';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { Box, Container } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;
function Header(){
    const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
    return (
        <div className={styles.nav}>
            <div className={styles.wrapper}>
                <Grid container className={styles.container}>
                    <Box
                    component={Grid}
                    item
                    sm={3} 
                    display={{ xs: "none", md: "block" }}>
                    <Grid item className={styles.logoContainer}>
                        <Logo />
                    </Grid>
                    </Box>
                    <Grid item xs>
                        <InputBase
                            startAdornment={<SearchIcon/>}
                            className={styles.inputBase}
                            placeholder="Find items, users and activities"
                        >
                        </InputBase>
                    </Grid>
                    <Box
                    component={Grid}
                    item
                    md={5} 
                    display={{ xs: "none", md: "block" }}>
                    <Grid item>
                        <Container>
                        <Grid container spacing={10}>
                            <Grid item md={3}>
                        <Link href='/'><Button variant="text" color="inherit">Home</Button></Link>
                            </Grid>
                            <Grid item md={3}>
                        <Link href='/activity'><Button variant="text" color="inherit">Activity</Button></Link>
                            </Grid>
                            <Grid item md={3}>
                        <Link href='/explore'><Button variant="contained">Explore</Button></Link>
                            </Grid>
                        </Grid>
                        </Container>
                    </Grid>
                    </Box>
                    <Box
                    component={Grid}
                    item
                    xs={1} 
                    display={{ xs: "inline", md: "none" }}>
                        <div>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls="long-menu"
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                                }}>
                                <Link href='/'>
                                    <MenuItem>
                                        Home
                                    </MenuItem>
                                </Link>
                                <Link href='/activity'>
                                    <MenuItem>
                                        Activity
                                    </MenuItem>
                                </Link>
                                <Link href='/explore'>
                                    <MenuItem>
                                        Explore
                                    </MenuItem>
                                </Link>
                                {/* <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem>
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem> */}
                            </Menu>
                            </div>
                    </Box>
                </Grid>
            </div>
        </div>
    );
}

export default Header;