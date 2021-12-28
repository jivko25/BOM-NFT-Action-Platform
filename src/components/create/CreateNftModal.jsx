import {useState} from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Container, Grid } from '@mui/material';
import axios from 'axios';
import { DateTimePicker } from '@mui/lab';

export default function CreateNftModal({open, handleClose}) {
  const [value, setValue] = useState(null)
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [details, setDetails] = useState(null);
  const [price, setPrice] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [date, setDate] = useState(null);
  

//   console.log(typeof value.toISOString());
  async function handleSubmit() {
    const user = JSON.parse(sessionStorage.getItem('user')).data;
    const body = {
        "currency": currency,
        "details": details,
        "image": image,
        "isFeatured": false,
        "likes": [],
        "name": name,
        "owner": {
            "id" : user.objectId,
            "url" : user.url,
            "username" : user.username,
            "email" : user.email,
            "verified" : user.verified
        },
        "price": Number(price),
        "auction_end" : value,
        "bids" : [],
        "bid" : 1,
        "isBought" : false,
        "buyerId" : ''
        }
    const res = await axios.post(`${process.env.api}/classes/Nfts`, body, {headers: process.env.headers});
    handleClose();
    console.log(res);
  }

  return (
    <div>
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Create NFT</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} justifyContent={"center"}>
                <Grid item xs={8}>
                <TextField 
                label="Name" 
                variant="outlined" 
                onChange={(e) => {setName(e.target.value)}}
                // error={error.error}
                fullWidth/>
                </Grid>

                <Grid item xs={8}>
                <TextField 
                label="Image url" 
                variant="outlined" 
                onChange={(e) => {setImage(e.target.value)}}
                // error={error.error}
                fullWidth/>
                </Grid>

                <Grid item xs={8}>
                <TextField 
                label="Details" 
                variant="outlined" 
                onChange={(e) => {setDetails(e.target.value)}}
                // error={error.error}
                fullWidth/>
                </Grid>

                <Grid item xs={8}>
                <TextField 
                label="Price" 
                variant="outlined" 
                onChange={(e) => {setPrice(e.target.value)}}
                // error={error.error}
                fullWidth/>
                </Grid>

                <Grid item xs={8}>
                <TextField 
                label="Currency" 
                variant="outlined" 
                onChange={(e) => {setCurrency(e.target.value)}}
                // error={error.error}
                fullWidth/>
                </Grid>

                <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    label="Auction end date"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue.toISOString());
                      }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} fullWidth>Create</Button>
            </DialogActions>
        </Dialog>
    </div>      
  );
}