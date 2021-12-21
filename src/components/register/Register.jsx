import styles from './Register.module.scss';
import Grid from '@mui/material/Grid'
import { Button, Container, TextField, Typography } from '@mui/material';
import Link from '../link/Link';
import axios from 'axios';
import { useState } from 'react';

export default function Register(){
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function register(){
        const res = await axios.post(`${process.env.api}/users`, {
            "username" : username,
            "email" : email,
            "password" : password
        }, {headers: process.env.headers})
        console.log(res);
    }
    return(
        <div className={styles["register-wrapper"]}>
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                <Container>
                    <TextField label="Username" variant="outlined" onChange={(e) => {setUsername(e.target.value)}} fullWidth/>
                </Container>
              </Grid>
              <Grid item>
                <Container>
                    <TextField label="Email" variant="outlined" onChange={(e) => {setEmail(e.target.value)}} fullWidth/>
                </Container>
              </Grid>
              <Grid item>
                <Container>
                    <TextField label="Password" variant="outlined" type="password" onChange={(e) => {setPassword(e.target.value)}} fullWidth />
                </Container>
              </Grid>
              <Grid item>
                <Container>
                    <TextField label="Repeat Password" type="password" variant="outlined" fullWidth/>
                </Container>
              </Grid>
              <Grid item>
                <Container>
                    <Button variant="contained" onClick={register} fullWidth>Sign in</Button>
                </Container>
                <Container>
                    <Link href="/login">
                        <Typography className={styles.login}>Login</Typography>
                    </Link>
                </Container>
              </Grid>
            </Grid>
        </div>
    )
}