import { Button, Checkbox, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import Avatar from "../avatar/Avatar";

export default function FeaturedModalRow({nft, bigImage, setBigImage, isBigImageSelected, midImage, setMidImage, isMidImageSelected, smallImage, setSmallImage, isSmallImageSelected}){
    console.log(bigImage);
    return(
        <Grid container justifyContent={"center"} color="secondary">
            <Grid item xs={3} sm={2}>
                <Avatar url={nft?.image} size={30}/>
            </Grid>
            <Grid item xs={0} sm={4} style={{textAlign : 'center'}}>
            <Box display={{'xs' : 'none', 'sm' : 'block'}}>
                <Typography variant="p">{nft?.name}</Typography>
            </Box>
            </Grid>
            <Grid item xs={3} sm={1}>
                <Checkbox color="primary" onChange={(e) => {setBigImage(e.target.checked ? [nft] : [])}} 
                disabled={bigImage[0]?.objectId !== nft.objectId ? midImage.includes(nft) || smallImage.includes(nft) ? true : isBigImageSelected : false} 
                checked={bigImage[0]?.objectId == nft.objectId}/>
            </Grid>
            <Grid item xs={3} sm={1}>
                <Checkbox color="primary" onChange={(e) => {
                    if(e.target.checked){ 
                        const newArr = [...midImage]
                        newArr.splice(0, 0, nft)
                        setMidImage(newArr);
                    }
                    else{
                        const newArr = [...midImage]
                        newArr.splice(midImage.indexOf(nft), 1);
                        setMidImage(newArr);
                    }
                }}
                disabled={!midImage.includes(nft) ? bigImage[0]?.objectId == nft.objectId || smallImage.includes(nft) ? true : isMidImageSelected : false}
                checked={midImage.includes(nft)}
                />
            </Grid>
            <Grid item xs={3} sm={1}>
            <Checkbox color="primary" onChange={(e) => {
                    if(e.target.checked){ 
                        const newArr = [...smallImage]
                        newArr.splice(0, 0, nft)
                        setSmallImage(newArr);
                    }
                    else{
                        const newArr = [...smallImage]
                        newArr.splice(smallImage.indexOf(nft), 1);
                        setSmallImage(newArr);
                    }
                }}
                disabled={!smallImage.includes(nft) ? bigImage[0]?.objectId == nft.objectId || midImage.includes(nft) ? true : isSmallImageSelected : false}
                checked={smallImage.includes(nft)}
                />
            </Grid>
        </Grid>
        )
}