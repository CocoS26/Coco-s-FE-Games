import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../UserStorage';


export const UserContext = createContext();

export const UserProvider = ({ children }) =>{
   
    const [users, setUsers] = useState({})
    const isLoggedIn = users!==null;
    

 
//    ()=>{
//         const savedUsername = localStorage.getItem('username');
//         const savedName = localStorage.getItem('name');
//         const savedURL = localStorage.getItem('avatar_url');
//         console.log(savedUsername,savedName ,savedURL)
//         const initial = {username:savedUsername, name:savedName, savedURL:savedURL};
//         console.log(initial)
//         return initial || "";
//     }

// {
//         username:["tickle122","grumpy19","happyamy2016","cooljmessy","weegembump","jessjelly"],
//         name:["Tom Tickle","Paul Grump","Amy Happy","Peter Messy","Gemma Bump","Jess Jelly"],
//         avatar_url:[
//             "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
//             "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
//             "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
//             "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
//             "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
//             "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"

//         ]
//         }
    

    return ( 
    <UserContext.Provider value={{users, setUsers, isLoggedIn}}>{children}</UserContext.Provider>
    )
}

