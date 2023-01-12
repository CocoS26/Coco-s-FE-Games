import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { UserContext } from "./Users";
const Header =()=>{
    // const { user } = useContext(UserContext)

    return (
        <header className ="Header">
            <h1>NC-Games!</h1>
            {/* <div>
                <p>{user.username}</p>
                <img src={user.image_url}></img>
            </div> */}
        </header>
        
    );
}
export default Header;