import { createContext, useEffect, useState } from 'react';

//create a context to be used anywhere in the component tree
export const UserContext = createContext();

export const UserProvider = ({ children }) =>{
    const [users, setUsers] = useState({username:"tickle122",
    name:"Tom Tickle",
    avatar_url:"https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"})

    const isLoggedIn = users!==null;

    return ( 
    <UserContext.Provider value={{users, setUsers, isLoggedIn}}>{children}</UserContext.Provider>
    )
}

