
import {createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserProvider({children}) {
    const [items, setItems] = useState([]);
    const [userLikes, setUserLikes] = useState([]);
    const [userBids, setUserBids] = useState([]);

    return(
        <UserContext.Provider value={[items, setItems, userLikes, setUserLikes, userBids, setUserBids]}>
            {children}
        </UserContext.Provider>
    )
    
}