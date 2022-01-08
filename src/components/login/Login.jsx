import styles from './Login.module.scss';
import Grid from '@mui/material/Grid'
import { Alert, Button, Container, Snackbar, TextField, Typography } from '@mui/material';
import Link from '../link/Link';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login(){
    const router = useRouter();
    const [username, setUsername] = useState();
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

    async function login(){
        const res = await axios.post(`${process.env.api}/login`, {
            "username" : username,
            "password" : password
        }, {headers: process.env.headers})
        .catch((error) => {
            setError({error : true, message: error.response.data.error});
        });
        if(res?.data){
            const permissions = await axios.get(`${process.env.api}/classes/Admins?where={"userId" : "${res.data.objectId}"}`, {headers : {
                'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
                'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
                'X-Parse-Revocable-Session' : '1',
                'Content-Type' : 'application/json'}}
              ).catch((error) => {console.log('No permissions')});
              console.log(res?.data.permissions);
              console.log(permissions?.data.results.length);
              if(permissions?.data.results.length !== 0 & res?.data.permissions == 'user'){
                await axios.put(`${process.env.api}/users/${res.data.objectId}`, {"permissions" : "admin"}, {headers : {
                    'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
                    'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
                    'X-Parse-Session-Token' : res.data.sessionToken,
                    'X-Parse-Revocable-Session' : '1',
                    'Content-Type' : 'application/json'}}
                  ).catch((error) => {console.log('No permissions')});
                  res.data.permissions = "admin";
              }
              else if(permissions?.data.results.length == 0 & res?.data.permissions == 'admin'){
                await axios.put(`${process.env.api}/users/${res.data.objectId}`, {"permissions" : "user"}, {headers : {
                    'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
                    'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
                    'X-Parse-Session-Token' : res.data.sessionToken,
                    'X-Parse-Revocable-Session' : '1',
                    'Content-Type' : 'application/json'}}
                  ).catch((error) => {console.log('No permissions')});
                  res.data.permissions = "user";
              }
            const user = {
                token : res.data.sessionToken,
                data : res.data
            }
            sessionStorage.setItem('user', JSON.stringify(user));
            setError({error : false, message : ''})
            router.push('/');
        }
    }
    return(
        <div>  
            <div className={styles["login-wrapper"]}>
                <Grid container direction={"column"} spacing={3}>
                <Grid item>
                    <Container>
                            <TextField 
                            label="Username" 
                            variant="outlined" 
                            onChange={(e) => {setUsername(e.target.value)}}
                            error={error.error}
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
                        error={error.error}
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
                <Snackbar open={error.error} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {error.message}
                    </Alert>
                </Snackbar>
        </div>
    )
}