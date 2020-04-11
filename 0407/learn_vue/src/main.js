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


new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
