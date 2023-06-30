import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b94f39a = () => interopDefault(import('../pages/apoio-tecnico.vue' /* webpackChunkName: "pages/apoio-tecnico" */))
const _7f8161b1 = () => interopDefault(import('../pages/empresa.vue' /* webpackChunkName: "pages/empresa" */))
const _1396f4fe = () => interopDefault(import('../pages/fale-conosco.vue' /* webpackChunkName: "pages/fale-conosco" */))
const _f598fd0c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _f72d1e46 = () => interopDefault(import('../pages/produtos/_slug.vue' /* webpackChunkName: "pages/produtos/_slug" */))
const _18178a3a = () => interopDefault(import('../pages/_tag.vue' /* webpackChunkName: "pages/_tag" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/smart/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/apoio-tecnico",
    component: _6b94f39a,
    name: "apoio-tecnico"
  }, {
    path: "/empresa",
    component: _7f8161b1,
    name: "empresa"
  }, {
    path: "/fale-conosco",
    component: _1396f4fe,
    name: "fale-conosco"
  }, {
    path: "/",
    component: _f598fd0c,
    name: "index"
  }, {
    path: "/produtos/:slug?",
    component: _f72d1e46,
    name: "produtos-slug"
  }, {
    path: "/:tag",
    component: _18178a3a,
    name: "tag"
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
