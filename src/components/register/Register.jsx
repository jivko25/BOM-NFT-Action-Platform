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
    const [repassword, setRepassword] = useState();
    const [error, setError] = useState({error : false, message : ''});


    const validatePassword = (e) => {
      // console.log(password);
      // e.target.value.length >= 6 ?
      // e.target.value.length == repassword ?
       setPassword(e.target.value)
      //  :
      //  null
      //  : 
      //    setError({error: true, message: 'Password need to be at least 6 symbols'})
    }

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
      if(password == repassword){
        const res = await axios.post(`${process.env.api}/users`, {
            "username" : username,
            "email" : email,
            "password" : password,
            "url" : "https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
        }, {headers: process.env.headers})
        .catch((error) => {
          setError({error : true, message: error.response.data.error});
        });
        if(res?.data){
        router.push('/');
        res.data.username = username;
        res.data.url = "https://m.media-amazon.com/images/I/810XSuEz1vL._AC_SL1500_.jpg";
        const user = {
            token : res.data.sessionToken,
            data : res.data
        }
        sessionStorage.setItem('user', JSON.stringify(user));
        }
      }
      else{
        setError({error : true, message : "Password and Repeat Password dont match"})
      }
    }
    return(
      <div>
        <div className={styles["register-wrapper"]}>
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                <Container>
                    <TextField label="Username" variant="outlined" error={error.message && error.message.toLocaleLowerCase().includes('username')} onChange={(e) => {setUsername(e.target.value)}} fullWidth/>
                </Container>
              </Grid>
              <Grid item>
                <Container>
                    <TextField label="Email" variant="outlined" error={error.message && error.message.toLocaleLowerCase().includes('email')} onChange={(e) => {setEmail(e.target.value)}} fullWidth/>
                </Container>
              </Grid>
              <Grid item>
                <Container>
                    <TextField label="Password" variant="outlined" type="password" error={error.message && error.message.toLocaleLowerCase().includes('password')} onChange={validatePassword} fullWidth />
                </Container>
              </Grid>
              <Grid item>
                <Container>
                    <TextField label="Repeat Password" type="password" variant="outlined" error={(error.error & password !== repassword) || error.message && error.message.toLocaleLowerCase().includes('password')} onChange={(e) => {setRepassword(e.target.value)}} fullWidth/>
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