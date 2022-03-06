import {request} from '@/plugins/request.js'

export const getArticles = (params)=>{
    return request({
        method:'GET',
        url:'/articles',
        params
    })
}

// 获取关注的文章额李彪
export const getFeedArticles = (params)=>{
    return request({
        method:'GET',
        url:'/articles/feed',
        params
    })
}

//点赞
export const addFavorite = (slug)=>{
    return request({
        method:'POST',
        url:'/articles/${slug}/favorite',
        params
    })
}

//取消点赞
export const deleteFavorite = (slug)=>{
    return request({
        method:'DELETE',
        url:'/articles/${slug}/favorite',
        params
    })
}