import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue'),
    redirect:'/home',
    children:[
      {
        path:'/home',
        component: ()=>import('../components/home')
      },
      {
        path:'/classify',
        component: ()=>import('../components/classify')
      },
      {
        path:'/cart',
        component: ()=>import('../components/cart')
      },
      {
        path:'/user',
        component: ()=>import('../components/user')
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/login.vue')
  },
  {
    path:'/goodsInfo/:goodsId',
    name:'goodsInfo',
    component: ()=>import('../views/goods.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // linkActiveClass:'qqq',//默认是 router-link-active
  // linkExactActiveClass:'www',// 默认是 router-link-exact-active
  routes
})

export default router
