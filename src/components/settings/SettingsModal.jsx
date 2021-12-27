import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import Grid from '@mui/material/Grid'
import { useState } from 'react';
import axios from 'axios';


export default function SettingsModal({open, handleClose}){
    const [url, setUrl] = useState('');

    async function changeProfileImage(){
        const user = JSON.parse(sessionStorage.getItem('user')).data;
        const res = await axios.put(`${process.env.api}/users/${user.objectId}`, {"url" : url}, {headers: {
          'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
          'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
          'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
          'X-Parse-Revocable-Session' : '1',
          'Content-Type' : 'application/json'
        }})
        .catch((e) => console.log(e.response));
        if(res?.data){
        user.url = url;
        sessionStorage.setItem('user', JSON.stringify({"token" : user.token, "data": user}))
        handleClose();
        }
      }

    return(
        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth={"md"}
        >
            <DialogTitle>Settings</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item xs={10}>
                        <Grid container spacing={2}>
                        <Grid item xs={10}>
                        <TextField
                        label="Profile image url" 
                        variant="outlined" 
                        onChange={(e) => {setUrl(e.target.value)}}
                        // error={error.error}
                        fullWidth/>
                        </Grid>
                        <Grid item xs={2}>
                        <Button onClick={changeProfileImage}>Change</Button>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} fullWidth>Close</Button>
            </DialogActions>
        </Dialog>
    </div>    
    )
}