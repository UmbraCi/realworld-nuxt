import axios from 'axios'


export const request = axios.create({
    baseURL: 'https://api.realworld.io/api',
    
  });

  export default ({ store }) =>{
    const {user}  = store.state
    
    request.interceptors.request.use(config => {
        if(user && user.token){
            config.headers.Authorization = `Token ${user.token}`
        }
        return config
      },
      error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
      }
      )
  }

