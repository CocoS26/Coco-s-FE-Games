import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom"
import { getSingleReview } from "../utils/api";
import { patchComment } from "../utils/api";
import Comments from "./Comments"
import CommentAdder from "./CommentAdder";

export default function SingleReview() {
    const { review_id } = useParams();
    const [review, setReview] = useState({});
    const [isError, setIsError] = useState(false);
    
    useEffect(()=>{
        getSingleReview(review_id)
        .then((newReview)=>{
            if (!newReview.review_id){
                setIsError(false)
            }
            setReview(newReview)
        });
    },[review_id])

    if (!review.review_id) return <p>This review does not exist</p>

    const{title, designer, owner, review_img_url, category, review_body, created_at,votes,comment_count} = review

    const upVote = (review_id,inc) =>{
        patchComment(review_id,inc)
        .then(()=>{
            setReview((currReview)=>{
                if(inc>0){
                      const votedReview = {...currReview, votes: currReview.votes+1}
                return votedReview
                }else{
                    const votedReview = {...currReview, votes: currReview.votes-1}
                return votedReview
                }
                })
            }) 
        .catch((err)=>{
            setReview((currReview)=>{
                const votedReview = {...currReview}
                alert("Sorry something went wrong, please try again later.");
                return votedReview
                })
        })
    }
   

    return (
       <>
        <main className ="Home">
        < Link to="/reviews"className= "Header__link">
            <h2>Return To Home Page</h2>
        </Link>
        </main >
        <section className="ReviewCard">
        <p><strong>Title:</strong>{title}</p>
        <p><strong>Designer:</strong>{designer}</p>
        <p><strong>Owner:</strong> {owner}</p>
        <p><strong>Category: </strong>{category}</p>
        <p><strong>Review_body:</strong>{review_body}</p>
        <p><strong>Created_at:</strong>{created_at}</p>
        <p><strong>Votes:</strong>{votes}</p>
        <button onClick={()=>{upVote(review_id,+1)}}>👍<span arial-label="votes for this review"></span></button>
        <button onClick={()=>{upVote(review_id,-1)}}>👎<span arial-label="dislike this review"></span></button>
        <p><strong>Comment count:</strong>{comment_count}</p>
        <img className="Item_img" src={review_img_url} alt={`picture of ${review_id}`} />
        <Comments />
        <CommentAdder />

        </section>        
        

     
        </>
     
        );
}