import request from '@/utils/request.js'

export const getTags = (params)=>{
    return request({
        method:'GET',
        url:'/tags',
        params
    })
}