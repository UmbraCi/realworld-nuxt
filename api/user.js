import request from '@/utils/request.js'

export const login = (data)=>{
    return request({
        method:'POST',
        url:'/users/login',
        data
    })
}

export const register = (data)=>{
    return request({
        method:'POST',
        url:'/users',
        data
    })
}