import { Button, Checkbox, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import Avatar from "../avatar/Avatar";

export default function FeaturedModalRow({nft}){
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
                <Checkbox color="primary"/>
            </Grid>
            <Grid item xs={3} sm={1}>
                <Checkbox color="primary"/>
            </Grid>
            <Grid item xs={3} sm={1}>
                <Checkbox color="primary"/>
            </Grid>
        </Grid>
        )
}