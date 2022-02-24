/**
 * Nuxt.js配置文件
 */
export default {
    router: {
      extendRoutes(routes, resolve) {
          //清除Nuxt.js 基于目录默认生成的路由表
          routes.splice(0)
          routes.push(...[
              {
              path:'/',
              component:resolve(__dirname, 'pages/layout/index.vue'),
              children:[
                  {
                      path:'',
                      name:'home',
                      component:resolve(__dirname, 'pages/home/index.vue'),
                  },
                  {
                    path:'login',
                    name:'login',
                    component:resolve(__dirname, 'pages/login/index.vue'),
                  },
                  {
                    path:'register',
                    name:'register',
                    component:resolve(__dirname, 'pages/login/index.vue'),
                  },
                  {
                    path:'/profile/:username',
                    name:'profile',
                    component:resolve(__dirname, 'pages/profile/index.vue'),
                  },
                  {
                    path:'/setting',
                    name:'setting',
                    component:resolve(__dirname, 'pages/setting/index.vue'),
                  },
                  {
                    path:'/editor',
                    name:'editor',
                    component:resolve(__dirname, 'pages/editor/index.vue'),
                  },
                  {
                    path:'/article/:slug',
                    name:'article',
                    component:resolve(__dirname, 'pages/article/index.vue'),
                  },
              ]
             }
          ])
      }
    }
  }