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