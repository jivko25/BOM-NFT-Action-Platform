import styles from './Login.module.scss';
import Grid from '@mui/material/Grid'
import { Button, Container, TextField, Typography } from '@mui/material';
import Link from '../link/Link';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login(){
    const router = useRouter();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);

    async function login(){
        const res = await axios.post(`${process.env.api}/login`, {
            "username" : username,
            "password" : password
        }, {headers: process.env.headers})
        .catch((error) => {
            setError(true);
          });
        if(res?.data){
        router.push('/');
        const user = {
            token : res.data.sessionToken,
            username : res.data.username
        }
        sessionStorage.setItem('user', JSON.stringify(user));
        }
    }
    return(
        <div className={styles["login-wrapper"]}>
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                  <Container>
                        <TextField 
                        label="Username" 
                        variant="outlined" 
                        onChange={(e) => {setUsername(e.target.value)}}
                        error={error}
                        fullWidth/>
                  </Container>
              </Grid>
              <Grid item>
                <Container>
                    <TextField 
                    label="Password" 
                    variant="outlined" 
                    type="password" 
                    onChange={(e) => {setPassword(e.target.value)}} 
                    error={error}
                    fullWidth />
                </Container>
              </Grid>
              <Grid item>
                <Container>
                    <Button variant="contained" onClick={login} fullWidth>Login</Button>
                </Container>
                <Container>
                    <Link href="/register">
                    <Typography className={styles.register}>Sign up</Typography>
                    </Link>
                </Container>
              </Grid>
            </Grid>
        </div>
    )
}