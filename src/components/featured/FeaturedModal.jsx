import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import FeaturedModalRow from "./FeaturedModalRow";


export default function FeaturedModal({open, handleClose, nfts = []}){
        return(
        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
        >
            <DialogTitle>Featured images</DialogTitle>
            <DialogContent>
                    <Grid container justifyContent={"center"} color="secondary" style={{marginBottom: '20px'}}>
                        <Grid item xs={3} sm={2} style={{textAlign : 'center'}}>
                            <Typography variant="p">Image</Typography>
                        </Grid>
                        <Grid item xs={0} sm={4} style={{textAlign : 'center'}}>
                        <Box display={{'xs' : 'none', 'sm' : 'block'}}>
                            <Typography variant="p">Name</Typography>
                        </Box>
                        </Grid>
                        <Grid item xs={3} sm={1} style={{textAlign : 'center'}}>
                            <Typography variant="p">B(1)</Typography>
                        </Grid>
                        <Grid item xs={3} sm={1} style={{textAlign : 'center'}}>
                            <Typography variant="p">M(3)</Typography>
                        </Grid>
                        <Grid item xs={3} sm={1} style={{textAlign : 'center'}}>
                            <Typography variant="p">S(3)</Typography>
                        </Grid>
                    </Grid>
                {
                    nfts.map(nft => {
                        return(
                            <FeaturedModalRow nft={nft} key={nft.objectId}/>
                        )
                    })
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} fullWidth>Save and close</Button>
            </DialogActions>
        </Dialog>
    </div>    
    )
}