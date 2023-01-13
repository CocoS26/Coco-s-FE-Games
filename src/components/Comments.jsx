import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByReviewId } from "../utils/api"
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import { deleteComment } from "../utils/api";
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Comments = () =>{
    const userValue = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])
    const {review_id} = useParams()
useEffect(()=>{
    setIsLoading(true)
    getCommentByReviewId(review_id)
    .then((commentsFromApi) =>{
        setComments(commentsFromApi)
        setIsLoading(false)
    })
},[])


const removeComment =(comment_id) =>{
    deleteComment(comment_id)
    .then((res)=>{
        setComments((currComments)=>{
            return currComments.filter((comment)=>
            comment.comment_id !==comment_id)
    })  
})
}


if (isLoading) return <p className="Loading">Loading...</p>

if (comments.length!==0)
    {return (
    <main className= "CommentList">
    <h2>Comments</h2>
    <p><CommentAdder setComments={setComments}/></p>
    <section>
    <ul>
     
        {comments.map((comment)=>{
        if(comment.author===userValue.users.username)
        {return (
            <>
            <li key={comment.comment_id}> 
            <CommentCard className = "CommentList__list"
            author = {comment.author}
            body={comment.body} 
            review_id = {comment.review_id}
            votes={comment.votes}
            created_at={comment.created_at}>
            </CommentCard> 
            <button onClick= {()=> {removeComment(comment.comment_id);alert("Your comment has been deleted!")}}>Delete</button>
            </li>
            </>
        )}return( <>
            <li key={comment.comment_id}> 
            <CommentCard className = "CommentList__list"
            author = {comment.author}
            body={comment.body} 
            review_id = {comment.review_id}
            votes={comment.votes}
            created_at={comment.created_at}>
            </CommentCard> 
            </li>
            </>)
    })}
    </ul>
    </section>
    </main>
)
    }
    else{
        return(
        <>
        <p>Be the first person to comment</p>
        <p><CommentAdder setComments={setComments}/></p>
        </>
        )
        
    }}
export default Comments