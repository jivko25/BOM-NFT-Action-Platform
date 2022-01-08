import { Button, Checkbox, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import Avatar from "../avatar/Avatar";


export default function UserRow({user, permissions}){
    const [admin, setAdmin] = useState(permissions.length > 0);
    let permissionId = null;

    async function changePermissions(){
        if(admin == false){
        const permission = await axios.post(`${process.env.api}/classes/Admins`, 
        {"userId" : user.objectId}
        , {headers: {
            'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
            'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
            'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
            'X-Parse-Revocable-Session' : '1',
            'Content-Type' : 'application/json'
        }})
        .catch((e) => console.log(e.response));
        permissionId = permission.data.objectId;
        }
        else{
            await axios.delete(`${process.env.api}/classes/Admins/${permissions[0].objectId}`, {headers: {
            'X-Parse-Application-Id' : '7m3WuKH1Sd0yxe0MI5kfZHfhYpSBCRkHVuM5Yfxy',
            'X-Parse-REST-API-Key' : 'Of9P0j3AUKnDZmSqM5FQSYDZXZnYqDFjQJuoa5t9',
            'X-Parse-Session-Token' : JSON.parse(sessionStorage.getItem('user')).token,
            'X-Parse-Revocable-Session' : '1',
            'Content-Type' : 'application/json'
        }})
        .catch((e) => console.log(e.response));
        }
        setAdmin(!admin)
    }
    return(
        <Grid container justifyContent={"center"} color="secondary">
        <Grid item xs={1}>
        <Box display={{'xs' : 'none', 'sm' : 'block'}}>
            <Avatar url={user?.url} verified={user?.verified} size={30}/>
        </Box>
        </Grid>
        <Grid item xs={4} style={{textAlign : 'center'}}>
            <Typography variant="p">{user?.username}</Typography>
        </Grid>
        <Grid item xs={3} sm={4} style={{textAlign : 'center'}}>
        <Box display={{'xs' : 'none', 'sm' : 'block'}} xs={3}>
            <Typography variant="p">{user.createdAt.slice(0, 10)}</Typography>
        </Box>
        </Grid>
        <Grid item xs={3} sm={2} style={{textAlign : 'center'}}>
            <Typography variant="p">{admin ? 'admin' : 'user'}</Typography>
        </Grid>
        <Grid item xs={1}>
            <Checkbox color="primary" defaultChecked={admin} onChange={changePermissions} disabled={JSON.parse(sessionStorage.getItem('user')).data.objectId == permissions[0]?.userId}/>
        </Grid>
    </Grid>
        )
}