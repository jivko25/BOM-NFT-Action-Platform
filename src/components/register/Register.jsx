import styles from './Register.module.scss';
import Grid from '@mui/material/Grid'
import { Alert, Button, Container, Snackbar, TextField, Typography } from '@mui/material';
import Link from '../link/Link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register(){
    const router = useRouter();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState({error : false, message : ''});

    const handleClick = () => {
      setError({error : false, message : ''});
  };

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
      return;
      }

      setError({error : false, message : ''});
  };

    async function register(){
        const res = await axios.post(`${process.env.api}/users`, {
            "username" : username,
            "email" : email,
            "password" : password
        }, {headers: process.env.headers})
        .catch((error) => {
          setError({error : true, message: error.response.data.error});
        });
        if(res?.data){
        router.push('/');
        const user = {
            token : res.data.sessionToken,
            username : username
        }
        sessionStorage.setItem('user', JSON.stringify(user));
        }
    }
    return(
      <div>
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
        <Snackbar open={error.error} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error.message}
          </Alert>
        </Snackbar>
      </div>
    )
}