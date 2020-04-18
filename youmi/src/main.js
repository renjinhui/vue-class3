import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/vant'
import './common/filter'
import './common/ali.less'

Vue.config.productionTip = false
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
Vue.prototype.mapState = mapState
Vue.prototype.mapActions = mapActions
Vue.prototype.mapGetters = mapGetters
Vue.prototype.mapMutations = mapMutations
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
