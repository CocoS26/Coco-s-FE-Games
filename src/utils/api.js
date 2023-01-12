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
    
    // if (category){
    //     return reviewApi.get(`/reviews?category=${category}&sort_by=${sort_by}&order=${order}`)
    //     .then ((res)=>{
    //         return res.data
    //     })
    // }
    // if (category||sort_by||order){
         return reviewApi.get(`/reviews`, {params:{category:category, order:order, sort_by:sort_by} })
    .then ((res)=>{
        return res.data
    })
    // }else{
    //     return reviewApi.get(`/reviews`)
    //     .then ((res)=>{
    //         return res.data
    //     })
    // }
   
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
        body: body,
        created_at: created_at
    };
    return reviewApi
    .post(`/reviews/${review_id}/comments`, postBody)
    .then(({data})=>{
        console.log(data)
        return data
    })
}