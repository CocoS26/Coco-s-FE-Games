import { Link } from "react-router-dom"
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { useLocalStorage } from "../UserStorage";


export default function UserCard({username, name, avatar_url}){
    const userValue = useContext(UserContext)
    const setUserName=(username, name, avatar_url)=>{
        userValue.users.username= username
        userValue.users.name=name
        userValue.users.avatar_url=avatar_url
    }


    return(
        <>
        <br /> 
        <section id="UserCard"> 
        <Link to={`/reviews`} onClick={()=>{
            setUserName(username,name, avatar_url)
        }}>
        <h3>
        <p><strong><u>{username}</u></strong></p>
        </h3>
        
        </Link>
        
            <p><strong>name:</strong>{name}</p>
        <p>
            <img className="User_img" src={avatar_url} alt={`picture of ${name}`} />
        </p>
        </section>  
        </>
    )
}