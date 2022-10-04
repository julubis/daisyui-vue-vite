import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// function authRoute(to, from, next) {
//   const token = Cookies.get('token')
//   if (!token) {
//     next('/login')
//   }
//   const jwt = jwt_decode(token)
//   if (parseInt(jwt.exp) > Math.round(Date.now() / 1000)) {
//     next()
//   } else {
//     next('/login')
//   }
// }

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shopee',
    name: 'shopee',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shopee.vue')
  },
//   {
//     path: '/shopee/:id',
//     name: 'shopee-account',
//     component: () => import('../views/ShopeeAccountView.vue')
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('../views/LoginView.vue')
//   },
//   {
//     path: '/json-parse',
//     name: 'json-parse',
//     component: () => import('../views/JsonParseView.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router