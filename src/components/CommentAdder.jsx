import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";
const CommentAdder = ({ setComments }) =>{
    const { review_id } = useParams();
    const [newComment, setNewComment] = useState('');
   
    const handleSubmit = (e) =>{
        e.preventDefault();

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
