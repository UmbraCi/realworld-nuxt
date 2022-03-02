import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5190fb60 = () => interopDefault(import('..\\pages\\layout\\index.vue' /* webpackChunkName: "" */))
const _3f3d72ea = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "" */))
const _1bc0a201 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "" */))
const _00d017c1 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "" */))
const _7427f4ba = () => interopDefault(import('..\\pages\\setting\\index.vue' /* webpackChunkName: "" */))
const _326b4586 = () => interopDefault(import('..\\pages\\editor\\index.vue' /* webpackChunkName: "" */))
const _b3069b58 = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5190fb60,
    children: [{
      path: "",
      component: _3f3d72ea,
      name: "home"
    }, {
      path: "login",
      component: _1bc0a201,
      name: "login"
    }, {
      path: "register",
      component: _1bc0a201,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _00d017c1,
      name: "profile"
    }, {
      path: "/setting",
      component: _7427f4ba,
      name: "setting"
    }, {
      path: "/editor",
      component: _326b4586,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _b3069b58,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
