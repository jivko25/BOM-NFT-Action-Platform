import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import FeaturedModalRow from "./FeaturedModalRow";


export default function FeaturedModal({open, handleClose, nfts = []}){
        const [bigImage, setBigImage] = useState([]);
        const [midImage, setMidImage] = useState([]);
        const [smallImage, setSmallImage] = useState([]);
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
                        <Grid item xs={1} sm={4} style={{textAlign : 'center'}}>
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
                            <FeaturedModalRow nft={nft} key={nft.objectId} 
                            bigImage={bigImage} setBigImage={setBigImage} isBigImageSelected={bigImage.length == 1} 
                            midImage={midImage} setMidImage={setMidImage} isMidImageSelected={midImage.length == 3}
                            smallImage={smallImage} setSmallImage={setSmallImage} isSmallImageSelected={smallImage.length == 3}/>
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