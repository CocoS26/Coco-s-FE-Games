import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByReviewId } from "../utils/api"
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import { deleteComment } from "../utils/api";

const Comments = () =>{
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



if (isLoading) return <p className="Loading">Loading...</p>

if (comments.length!==0)
    {return (
    <main className= "CommentList">
    <h2>Comments</h2>
    <p><CommentAdder setComments={setComments}/></p>
    <section>
    <ul>
            {comments.map((comment)=>{
        return (
            <>
            <li key={comment.comment_id}> 
            <CommentCard className = "CommentList__list"
            body={comment.body} 
            review_id = {comment.review_id}
            votes={comment.votes}
            created_at={comment.created_at}>
            </CommentCard> 
            </li>
            </>
        )
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