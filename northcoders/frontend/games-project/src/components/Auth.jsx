import{ Link } from "react-router-dom"
export default function handleAuth(){

    return (
        <>
        <div className ="Auth">
        < Link to="/reviews"className= "Auth__guest">
            <h2>Continue as a guest</h2>
        </Link>
       </div>
        </>   
)
}
