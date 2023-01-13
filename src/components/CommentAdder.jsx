import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";
const CommentAdder = ({ setComments }) =>{
    const { review_id } = useParams();
    const [newComment, setNewComment] = useState('');
   
    const handleSubmit = (e) =>{
        e.preventDefault();
    const newUser= {
                username: "jessjelly",
                body: newComment,
            }
            if (newComment===0) return alert("Empty text field, please try again.")
            postComment(review_id,"jessjelly",newUser.body, newUser.created_at)
                .then((res)=>{
                    setComments((currComment)=>{
                        alert("Thank you for submitting a comment!")
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
            value = {newComment}
            onChange={(e)=>setNewComment(e.target.value)}
            placeholder="Add a comment"
            ></textarea><br />
            <button>Submit</button>
        </form>
        <button onClick={(e)=>setNewComment("")}>clear</button>
        </>
       
    )
}
export default CommentAdder;
