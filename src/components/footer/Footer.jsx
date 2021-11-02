import Container from "@mui/material/Container";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo"
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

export default function Footer(){
    return (
        <Grid container className={styles.container}>
            <Grid item xl={4}>
                <Logo type="muted" className={styles.logo}/>
            </Grid>
            <Grid item xl={4}>
                <p className={styles.copyright}>Bum all rights reserved 2021</p>
            </Grid>
            <Grid item xl={4}>
                <Button className={styles.policy}>Privacy Policy</Button>
                <Button className={styles.policy}>Cookie Policy</Button>
            </Grid>
        </Grid>
    );
}