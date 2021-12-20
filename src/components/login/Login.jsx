import styles from './Login.module.scss';
import Grid from '@mui/material/Grid'
import { Button, Container, TextField, Typography } from '@mui/material';
import Link from '../link/Link';

export default function Login(){
    return(
        <div className={styles["login-wrapper"]}>
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                  <Container>
                        <TextField label="Username" variant="outlined" fullWidth/>
                  </Container>
              </Grid>
              <Grid item>
                <Container>
                    <TextField label="Password" variant="outlined" fullWidth />
                </Container>
              </Grid>
              <Grid item>
                <Container>
                    <Button variant="contained" fullWidth>Login</Button>
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