import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from './router'
import Home from '../views/Home.vue'
// import Home2 from '../views/Home2.vue'
// import Home3 from '../views/Home3.vue'
// import Home4 from '../views/Home4.vue'

// vue-router  vuex 都是vue的插件
// Vue.use 传的参数 若是一个对象 则会找对象中的install方法执行并且会传一个Vue进去；
//                  若是一个函数 则会直接当作 install方法执行；
Vue.use(VueRouter)

const routes = [
  // 路由映射表
  {
    path: '/', // 走的路径
    name: 'Home',// 路径对应的名字
    component: Home // 路径对显示的组件
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about1234" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',// 控制的页面切换的模式  是 hash 或者 history模式； 默认 hash
  base: process.env.BASE_URL,
  routes //routes:routes
})

export default router
