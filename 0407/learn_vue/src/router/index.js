import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueRouter from './router'
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
    component: Home, // 路径对显示的组件
    meta:{
      til:"首页",
      level:6,
      access:'qqq|wwww|rtrr|tetrthr'
    },
    redirect:'/home1',// 走进HOme组件之后 再定向到 /home1这个路径
    children:[
      // {
      //   path: '/home1/:qqq/:www', // 走的路径
      //   name: 'Home1',// 路径对应的名字
      //   component: ()=>import('../components/home1') // 路径对显示的组件
      // },
      {
        path: '/home1', // 走的路径
        name: 'Home1',// 路径对应的名字
        meta:{
          til:"首页下的home1"
        },
        component: ()=>import('../components/home1') // 路径对显示的组件
      },
      {
        path: '/home2', // 走的路径
        name: 'Home2',// 路径对应的名字
        meta:{
          til:"首页下的home2"
        },
        component: ()=>import('../components/home2') // 路径对显示的组件
      },
    ]
  },
  
  {
    path: '/about',
    name: 'About',
    meta:{
      til:"关于",
      level:3
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about1234" */ '../views/About.vue')
  },
  {
    path:'/*',
    redirect:'/about'
  }
]
/* 
  VueRouter 传参方式 两种  路径传参  query传参
  // $router 存放的是方法   $route存放是属性
  query传参 是通过 ？的方式传递的 比较明显； 组件可以通过this.$route.query去获取对应的参数
  params传参  需要再路由映射表的path属性处 编写  /:属性名的方式；
              再router-link上的to 编写时 不能写path 需要写成 name
              组件可以通过 this.$route.params获取对应的参数
*/

const router = new VueRouter({
  mode: 'hash',// 控制的页面切换的模式  是 hash 或者 history模式； 默认 hash
  base: process.env.BASE_URL,
  routes //routes:routes
})

export default router
