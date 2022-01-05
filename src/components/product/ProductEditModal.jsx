import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material"
import axios from "axios";
import { useState } from "react"


export default function ProductEditModal({open, nft, handleClose, id}){
    const [isOpen, setIsOpen] = useState(open);

    const [name, setName] = useState(nft.name);
    const [image, setImage] = useState(nft.image);
    const [price, setPrice] = useState(nft.price);
    const [time, setTime] = useState(nft.auction_end);
    const [details, setDetails] = useState(nft.details);

    const saveChanges = async () => {
        const header = {
            'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
            'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
            'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
            'X-Parse-Revocable-Session' : '1',
            'Content-Type' : 'application/json'
          };
          await axios.put(`${process.env.api}/classes/Nfts/${id}`, {"name" : name !== undefined ? name : nft.name, "image" : image !== undefined ? image : nft.image, "price" : price !== undefined ? price : nft.price, "auction_end" : time, "details" : details !== undefined ? details : nft.details}, {headers: header})
          .catch((e) => console.log(e.response));
          handleClose();
    }
    console.log(time);

    return(
        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
        >
            <DialogTitle>Edit</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} justifyContent={"center"}>
                    {/*Name*/}
                    <Grid item xs={8}>
                        <TextField
                        variant="outlined" 
                        // value={nft.name}
                        label='Name'
                        onChange={(e) => {setName(e.target.value)}}
                        fullWidth/>
                    </Grid>
                    {/*Image*/}
                    <Grid item xs={8}>
                        <TextField
                        variant="outlined" 
                        // value={nft.image}
                        label='Image url'
                        onChange={(e) => {setImage(e.target.value)}}
                        fullWidth/>
                    </Grid>
                    {/*Price*/}
                    <Grid item xs={8}>
                        <TextField
                        variant="outlined" 
                        label='Price'
                        onChange={(e) => {setPrice(e.target.value)}}
                        fullWidth/>
                    </Grid>
                    {/*Description*/}
                    <Grid item xs={8}>
                        <TextField
                        variant="outlined" 
                        // value={nft.details}
                        label="Description"
                        onChange={(e) => {setDetails(e.target.value)}}
                        fullWidth/>
                    </Grid>
                    {/*End Time*/}
                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Auction end date"
                                value={time}
                                onChange={(newValue) => {
                                    setTime(newValue.toISOString());
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} fullWidth>Close</Button>
                <Button onClick={saveChanges} fullWidth>Save</Button>
            </DialogActions>
        </Dialog>
    </div>    
    )
}