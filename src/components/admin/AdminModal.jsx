import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, users } from "@mui/material";
import { useState } from "react";
import UserRow from "./UserRow";


export default function AdminModal({open, handleClose, users = [], permissions=[]}){
        return(
        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
        >
            <DialogTitle>User Permissions</DialogTitle>
            <DialogContent>
                {
                    users?.map(user => {
                        return(
                            <UserRow user={user} permissions={permissions.filter(permission => permission.userId == user.objectId)}/>
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