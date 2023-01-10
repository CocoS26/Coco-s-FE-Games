import {useState, useEffect} from "react";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import { useSearchParams } from "react-router-dom";

export default function Reviews() {
    const [isLoading, setIsLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const sortByCategory = searchParams.get('category')
    const setSortOrder = (direction)=>{
        const newParams = new URLSearchParams(searchParams);
        setSearchParams(newParams);
    }
    useEffect(()=>{
        getReviews(sortByCategory)
        .then((reviews)=>{
           
            setReviews(reviews)
            setIsLoading(false)
        })
    }, [sortByCategory])

    if (isLoading) return <p className="Loading">Loading...</p>
   
    return (
        <main className= "ReviewList">
            <h2>Displaying reviews about games:</h2>
        <section>
            {reviews.reviews.map(({review_id, owner, title, category})=>{
                return (
                    <ReviewCard className = "ReviewList__list"
                    key={review_id} 
                    review_id = {review_id}
                    owner={owner}
                    title={title}
                    category ={category}>
                    </ReviewCard>
                )
            })}
      
      </section>
    </main>
    )

}