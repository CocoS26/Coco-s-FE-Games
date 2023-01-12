import { useState } from "react";

const CommentAdder = () =>{
    const [newComment, setNewComment] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
 
    };
    return (
        <form className ="CommentAdder" onSubmit={handleSubmit}>
            <label htmlFor ="newComment">Add a comment</label>
            <textarea 
            id= "newComment"
            value ={newComment}
            onChange={(e)=>{setNewComment(e.target.value)}}
            ></textarea>
            <button>Add</button>
        </form>
    )
}

export default CommentAdder;