import Container from "@mui/material/Container";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo"
import { Box, Grid } from "@mui/material";
import { Button } from "@mui/material";

export default function Footer(){
    return (
        <Grid container className={styles.container}>
            <Grid item xs={4}>
                <Logo type="muted" className={styles.logo}/>
            </Grid>
            <Grid item md={4}>
            <Box display={{xs:"none", md:"inline"}}>
                <p className={styles.copyright}>Bum all rights reserved 2021</p>
            </Box>
            </Grid>
            <Grid item xs={8} md={4}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                <Button className={styles.policy}>Privacy Policy</Button>

                    </Grid>
                    <Grid item xs={6}>
                <Button className={styles.policy}>Cookie Policy</Button>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}