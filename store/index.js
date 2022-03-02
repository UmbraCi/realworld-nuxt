const cookieparser = process.server ? require('cookieparser') : undefined


export const state = ()=>{
    return {
        auth: null
    }
}

export const mutations = {
    setAuth (state, auth) {
      state.auth = auth
    }
  }


  export const actions = {
      //初始化容器以及需要传递给客户端的数据
    nuxtServerInit ({ commit }, { req }) {
      let auth = null
      if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        try {
          auth = JSON.parse(parsed.auth)
        } catch (err) {
          // No valid cookie found
        }
      }
      commit('setAuth', auth)
    }
  }

