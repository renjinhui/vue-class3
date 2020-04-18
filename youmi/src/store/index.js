import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let userInfoStr = localStorage.getItem('userInfo');

export default new Vuex.Store({
  state: {
    userInfo:userInfoStr ? JSON.parse(userInfoStr) : {},
    cartList:[]
  },
  mutations: {
    changeUserInfo(state,params){
      state.userInfo = params;
    },
    addCartList(state,params){
      let bol = state.cartList.some(item=>{
        if(item.goodsId == params.goodsId && item.selectedSkuComb.id == params.selectedSkuComb.id){
          item.selectedNum += params.selectedNum
          return true
        }
      })
      if(!bol){
        state.cartList.push(params)
      }
      
    }
  },
  getters:{
    loginState(state){
      return state.userInfo.name
    },
    goodsCount(state){
      return state.cartList.reduce((prev,cur)=>{
        return prev + cur.selectedNum
      },0)
    }
  },
  actions: {
    loginFn(store,params){
      // loginFn(params)
    }
  },
  modules: {
  }
})
