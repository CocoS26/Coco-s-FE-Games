import axios from 'axios';


const reviewApi = axios.create({
    baseURL : "https://cocos-be-games-project.onrender.com/api",
});




export const getCategories =()=>{
    return reviewApi.get('/categories')
    .then((res)=>{
        return res.data
    })
}
export const getReviews = (category)=>{
    let validCategories = [ 'euro game','social deduction','dexterity',"children's games"]
    if (validCategories.includes(category)){
        return reviewApi.get(`/reviews?category=${category}`)
        .then ((res)=>{
            return res.data
        })
    }
    return reviewApi.get("/reviews", {params:{category:category}})
    .then ((res)=>{
        return res.data
    })
}

export const getSingleReview = (review_id)=>{
    return reviewApi.get(`/reviews/${review_id}`)
    .then ((res)=>{
        return res.data.review
    })
}
