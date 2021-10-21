import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from '../logo/Logo.jsx'
import InputBase from '@mui/material/InputBase';
import styles from './Header.module.scss';

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
                        <Button variant="text" color="inherit">Home</Button>
                        <Button variant="text" color="inherit">Activity</Button>
                        <Button variant="contained">Explore</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Header;