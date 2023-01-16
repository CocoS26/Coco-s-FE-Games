import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { Link } from "react-router-dom";
const CommentAdder = ({ setComments }) =>{
const { review_id } = useParams();
const [newComment, setNewComment] = useState('');
   const userValue = useContext(UserContext)
   if(userValue.isLoggedIn===false){
    return ( 
        <>
        <p>(You need to sign in before you can comment)</p>
        </>
       
    )
   }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newUser= {
                username: userValue.users.username,
                body: e.target[0].value,
            }
            console.log(e.target[0].value)
            postComment(review_id,userValue.users.username,newUser.body, newUser.created_at)
                .then((res)=>{
                    setComments((currComment)=>{
                        alert("Thank you for submitting a comment!")
                        console.log([res,...currComment],"comment adder")

                        return [res,...currComment]
                    })
            })
                .catch(()=>{
                    setComments((currComment)=>{
                        alert("Sorry something went wrong, please try again later.");
                        return currComment
                        })
                })
                setNewComment("") 
                
        }
       
    return (
        <>
         <form className ="CommentAdder" onSubmit={handleSubmit}>
            <label>Add a comment</label><br />
            <textarea 
            id= "newComment"
            type ="text" required
            value = {newComment}
            onChange={(e)=>setNewComment(e.target.value)}
            placeholder="Add a comment"
            ></textarea><br />
            <button >Submit</button>
        </form>
        <button onClick={(e)=>setNewComment("")}>clear</button>
        </>
       
    )
}
export default CommentAdder;