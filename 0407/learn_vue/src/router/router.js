let Vue = null;
class VueRouter{
  constructor(options){
    let {routes} = options; 
    // debugger;
    // routes中存储的都是 一些对象
    // 对象中有path和对应的组件
    // this.routeMap = routes.reduce((obj,cur)=>{
    //   obj[cur.path] = cur.component;
    //   return obj;
    // },{})
    // {'/':Home,'/about':()=>}
    this.routeMap = {};
    routes.forEach(item=>{
      this.routeMap[item.path] = item.component;
    })
    window.addEventListener('load',()=>{
      // 刚进页面时  hash若不存在 需要补上 /
      location.hash = location.hash || '/';
      this._route = location.hash.slice(1)
    })
    this._route = location.hash.slice(1);
    Vue.util.defineReactive(this,'_route','/');// 只要当_route更改时 ，会通知所有用到该属性的地方进行更新
    window.addEventListener('hashchange',()=>{
      // 每次hash改变的时候都会触发这个函数
      this._route = location.hash.slice(1);
      console.log(this._route)
    })
  }
}
VueRouter.install = function(_vue){
  console.log(_vue);
  Vue = _vue
  // 我们在使用 vueRouter的时候 发现 每一个实例上都有$router这个属性
  // 这里是用了 一个全局混入
  Vue.mixin({
    beforeCreate() {
      // this 是谁？
      // this 是对应的混入到的每一个实例；
      // 每一个实例上都有一个 $options 对应的都是 每个组件的 对象
      if(this.$options.router){
        // router 就是 new 出来的 VueRouter实例
        // 若存在 router这个属性 证明this 是根组件
        this.$router = this.$options.router
      }else if(this.$parent){
        // 证明是其他子组件；
        this.$router = this.$parent.$router
      }
    },
  })
  Vue.component('router-link',{
    props:{
      to:{
        type:String,
        default:'/'
      },
      tag:{
        type:String,
        default:'a'
      }
    },
    
    // template:'<a :href="to">111<slot></slot></a>'
    render(h){
      // jsx 写法；  <template></template>
      // h 是 createElement； 返回的结果就是渲染组件对应的内容
      return h('a',{
        attrs:{
          href:'#'+this.to
        }
      },this.$slots.default)
    }
  })
  Vue.component('router-view',{
    render(h){
      // 若是一个组件 直接传给 h 函数即可
      //this.$router 是 Router实例  实例上有个 routeMap
      console.log(this.$router.routeMap,this.$router._route)
      return h(this.$router.routeMap[this.$router._route])
    }
  })
}
export default VueRouter;

/* 
  先创造一个 VueRouter类；因为在new时传递了一个对象 对象中有routes(路由映射表)这个属性
  我们需要 把这个映射表转成一个  路径：组件   的方式
  转成之后，
  监听了 load和 hashchange 事件   当更新hash时  把对应新路径更新到router实例的一个属性上;

  应为  Vue.use(插件)  组要插件提供一个install方法

  VueRouter.install = function(_vue){}
  // install 做了三件事
  1  使用全局混入的方法  把router实例挂载到每一个vue组件身上

  2 创造一个 router-link  全局组件  使用的是jsx写法(render)

  3 创造一个 router-view 全局组件  对应渲染时 当前路径对应的组件

  以上步骤完成之后  页面的初次渲染可以实现；但是 hash改变时页面不切换
  为了解决这个问题 我们使用了Vue写好的方法(Vuw.util.defineReactive()) 实现 数据的劫持
*/