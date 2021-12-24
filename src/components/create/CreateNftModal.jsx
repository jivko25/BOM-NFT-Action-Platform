import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Container, Grid } from '@mui/material';

export default function CreateNftModal() {
  const [value, setValue] = React.useState(null);

//   console.log(typeof value.toISOString());

  const handleSubmit = () => {

  }

  const handleClose = () => {

  }

  return (
    <div>
        <Dialog
            open={true}
            onClose={handleClose}
        >
            <DialogTitle>Create NFT</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} justifyContent={"center"}>
                <Grid item xs={8}>
                <TextField 
                label="Name" 
                variant="outlined" 
                // onChange={(e) => {setUsername(e.target.value)}}
                // error={error.error}
                fullWidth/>
                </Grid>

                <Grid item xs={8}>
                <TextField 
                label="Image url" 
                variant="outlined" 
                // onChange={(e) => {setUsername(e.target.value)}}
                // error={error.error}
                fullWidth/>
                </Grid>

                <Grid item xs={8}>
                <TextField 
                label="Details" 
                variant="outlined" 
                // onChange={(e) => {setUsername(e.target.value)}}
                // error={error.error}
                fullWidth/>
                </Grid>

                <Grid item xs={8}>
                <TextField 
                label="Price" 
                variant="outlined" 
                // onChange={(e) => {setUsername(e.target.value)}}
                // error={error.error}
                fullWidth/>
                </Grid>

                <Grid item xs={8}>
                <TextField 
                label="Currency" 
                variant="outlined" 
                // onChange={(e) => {setUsername(e.target.value)}}
                // error={error.error}
                fullWidth/>
                </Grid>

                <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Auction end date"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
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