import {useState, useEffect} from "react";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Reviews() {
    const [sortBy, setSortBy] = useState('votes')
    const [isLoading, setIsLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    let [searchParams, setSearchParams] = useSearchParams();  
    const [order, setOrder] = useState("asc")
    const sortByCategory = searchParams.get('category')
 
    const setSortOrder = (direction)=>{
        const newParams = new URLSearchParams(searchParams);
        setSearchParams(newParams);
    }
    
    const navigate = useNavigate()
    useEffect(()=>{ 
        let queryString = '/reviews'
        if (sortBy){
            queryString += `?sort_by=${sortBy}`
        if (order) {
            queryString+= `&order=${order}`}
        if (sortByCategory) {
            queryString +=`&category=${sortByCategory}`}
        }
        getReviews(sortByCategory,sortBy,order)
        .then((reviews)=>{
            setReviews(reviews)
            navigate(queryString)
            setIsLoading(false)
        })
    }, [sortByCategory,sortBy,order])


    if (isLoading) return <p className="Loading">Loading...</p>
   
    return (
        <main className= "ReviewList">
            <section>
            <select className="Option" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                <option value="title">Sort By</option>
                <option value="votes">Votes</option>
                <option value="comment_count">Comments</option>
                <option value="created_at">Date</option>
            </select>
        </section>
        <section>
            <button onClick={()=> setOrder('asc')}>ASC</button>
            <button onClick={()=> setOrder('desc')}>DESC</button>
        </section>
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

