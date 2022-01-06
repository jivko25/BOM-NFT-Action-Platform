
import {createContext, useContext, useState } from "react";

export const UserContext = createContext();
export const UpdateContext = createContext();

// export function useUserContext(){
//     return useContext(UserContext);
// }

// export function useUpdateContext(){
//     return useContext(UpdateContext);
// }

export default function UserProvider({children}) {
    const [items, setItems] = useState([]);
    const [userLikes, setUserLikes] = useState([]);
    const [userBids, setUserBids] = useState([]);
    return(
        <UserContext.Provider value={[items, setItems, userLikes, setUserLikes, userBids, setUserBids]}>
            {/* <UpdateContext.Provider value={[setLikes]}> */}
            {children}
            {/* </UpdateContext.Provider> */}
        </UserContext.Provider>
    )
    
}