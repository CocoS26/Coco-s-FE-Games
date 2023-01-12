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
export const getReviews = (category,sort_by, order)=>{
    let queryString= '/reviews'
    if (sort_by){
        queryString+=`?sort_by=${sort_by}`
    }
    if (order){
        queryString +=`&order=${order}`
    }
    if (category){
        queryString +=`&category=${category}`
    }
    return reviewApi.get(queryString)
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

export const postComment = (review_id, name, body, created_at) =>{
    const postBody={
        username: name,
        body: body
    };
    return reviewApi
    .post(`/reviews/${review_id}/comments`, postBody)
    .then(({data})=>{
        return data
    })
}

export const deleteComment = (comment_id) =>{
    return reviewApi
    .delete(`/comments/${comment_id}`)
    .then(({data})=>{
        return data
    })
}