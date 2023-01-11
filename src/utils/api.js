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
    
    if (category){
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

export const getCommentByReviewId = (review_id)=>{
    return reviewApi.get(`/reviews/${review_id}/comments`)
    .then((res)=>{
        return res.data
    })
}

export const patchComment = (review_id,inc) =>{
    const patchBody={
        inc_votes: inc,
    };
    return reviewApi
    .patch(`/reviews/${review_id}`, patchBody)
    .then(({data})=>{
        return data
    })
}