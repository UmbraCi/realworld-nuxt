import request from '@/utils/request.js'

export const getArticles = (params)=>{
    return request({
        method:'GET',
        url:'/articles',
        params
    })
}