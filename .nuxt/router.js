import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61259737 = () => interopDefault(import('..\\pages\\layout\\index.vue' /* webpackChunkName: "" */))
const _0b48ec22 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "" */))
const _4dcdaf4a = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "" */))
const _3862126c = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "" */))
const _5726d3c3 = () => interopDefault(import('..\\pages\\setting\\index.vue' /* webpackChunkName: "" */))
const _13420dd8 = () => interopDefault(import('..\\pages\\editor\\index.vue' /* webpackChunkName: "" */))
const _ed08dd46 = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "" */))

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
    component: _61259737,
    children: [{
      path: "",
      component: _0b48ec22,
      name: "home"
    }, {
      path: "login",
      component: _4dcdaf4a,
      name: "login"
    }, {
      path: "register",
      component: _4dcdaf4a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _3862126c,
      name: "profile"
    }, {
      path: "/setting",
      component: _5726d3c3,
      name: "setting"
    }, {
      path: "/editor",
      component: _13420dd8,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _ed08dd46,
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
