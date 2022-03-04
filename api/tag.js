import {request} from '@/plugins/request.js'

export const getTags = (params)=>{
    return request({
        method:'GET',
        url:'/tags',
        params
    })
}