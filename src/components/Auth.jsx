import{ Link } from "react-router-dom"
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { useState } from "react";

export default function HandleAuth(){
    const  userValue  = useContext(UserContext);
   
    return (
        <>
        <section className ="Auth">
        <Link to= "/users" className="Auth_user" 
        onClick={((e)=>{
        userValue.isLoggedIn=true
        }
        
        )}>
            <h2>Sign in</h2>
        </Link>
        < Link to="/reviews"className= "Auth__guest" onClick={(()=>userValue.isLoggedIn=false)}>
            <h3>Continue as a guest</h3>
        </Link>
        
       </section>
        </>   
)
}
