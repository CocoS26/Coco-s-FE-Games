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
                body: e.target[0].value,
                value: 0,
                created_at: 1511354613389,
            }
            
            postComment(review_id,"jessjelly",newUser.body, "Seconds ago")
                .then((res)=>{
                    setComments((currComment)=>{
                        return [res,...currComment]
                    })
            })
        }
       
    return (
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
    )
}
export default CommentAdder;
