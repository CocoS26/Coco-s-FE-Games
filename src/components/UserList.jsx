import { getUsers } from '../utils/api';
import { useEffect, useState } from 'react';
import  Usercard  from "./Usercard"


export default function UserList() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getUsers()
        .then((users)=>{
        setUsers(users)
        setIsLoading(false)
    })
    },[])
   

    if (isLoading) return <p className="Loading">Loading...</p>

    return (
        <>
        <main className= "userNames">
        <h3>Displaying all the users</h3>
        <section> 
            <ul className='UserList'>
                {users.users.map(({username, name, avatar_url})=>{
                return(
                <li key={username}>
                <Usercard className= "UserList__list"
                username={username}
                name = {name}
                avatar_url={avatar_url}
                >
                </Usercard>
                </li>  
            )
            })}
            </ul>  
        </section>
        </main>
        </>
      
        )
        
        

    
}