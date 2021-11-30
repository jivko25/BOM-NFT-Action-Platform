import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from '../logo/Logo.jsx'
import InputBase from '@mui/material/InputBase';
import styles from './Header.module.scss';
import Link from 'next/link';

function Header(){
    return (
        <div className={styles.nav}>
            <div className={styles.wrapper}>
                <Grid container className={styles.container}>
                    <Grid item className={styles.logoContainer}>
                        <Logo />
                    </Grid>
                    <Grid item>
                        <InputBase
                            startAdornment={<SearchIcon/>}
                            className={styles.inputBase}
                            placeholder="Find items, users and activities"
                        >
                        </InputBase>
                    </Grid>
                    <Grid item>
                        <Link href='/'><Button variant="text" color="inherit">Home</Button></Link>
                        <Link href='/activity'><Button variant="text" color="inherit">Activity</Button></Link>
                        <Link href='/explore'><Button variant="contained">Explore</Button></Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Header;