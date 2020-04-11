import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './directives'
// import './mixins'

Vue.config.productionTip = false
Vue.component('my-button',{
  // template:"<button>{{text}}</button>",
  render:function(h){
    return h('button',null,this.text)
  },
  data(){
    return {
      text:"按钮"
    }
  }
})

/* router.beforeEach((to,from,next)=>{
  console.log(to)
  if(user.level > to.meta.level){
    // 
    next(from.path)
  }else{
    document.title = to.meta.til || '珠峰'
    next();
  }
}) */
new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
