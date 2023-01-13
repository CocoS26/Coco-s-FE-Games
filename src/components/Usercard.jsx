import { Link } from "react-router-dom"
export default function UserCard({username, name, avatar_url}){
    return(
        <>
        <br /> 
        <section id="UserCard"> 
        <Link to={`/reviews`}>
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