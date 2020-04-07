import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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
  router,
  store,
  render: h => h(App)
}).$mount('#app')
