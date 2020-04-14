let Vue = null;
class Store{
  constructor(options){
    // options {state: mutations: actions:}
    // state中的数据是响应式的；
    let vm = new Vue({
      data:{
        state:options.state
      }
    })
    this.state = vm.state;


    this.mutations = {};
    let mutations = options.mutations || {};
    Object.keys(mutations).forEach(key=>{
      this.mutations[key] = (qqq)=>{
        mutations[key].call(this,this.state,qqq)
      }
    })

    this.actions = {};
    let actions = options.actions || {};
    Object.keys(actions).forEach(key=>{
      this.actions[key] = (option)=>{
        actions[key].call(this,this,option)
      }
    })

    this.getters = {};
    let getters = options.getters || {};
    Object.keys(getters).forEach(key=>{
      Object.defineProperty(this.getters,key,{
        get:()=>{
          return getters[key].call(this,this.state,getters)
        }
      })
    })
  }
  commit(type,aaa){
    this.mutations[type](aaa)
  }
  dispatch(type,option){
    this.actions[type](option)
  }
}
function install(_vue){
  console.log(_vue)
  Vue = _vue;
  Vue.mixin({
    beforeCreate() {
      if(this.$options.store){
        // 证明是个跟组件；
        this.$store  = this.$options.store
      }else if(this.$parent){
        this.$store = this.$parent.$store
      }
    }
  })
}
export function mapState(ary) {
  let obj = {};
  ary.forEach(key=>{
    obj[key] = function(){
      return this.$store.state[key]
    }
  })
  return obj;
}
export function mapGetters(ary){
  let obj =  {};
  ary.forEach(key=>{
    obj[key] = function(){
      return this.$store.getters[key]
    }
  })
  return obj;
}
export function mapMutations(ary){
  let obj = {};
  ary.forEach(key=>{
    obj[key] = function(qqq){
      return this.$store.commit(key,qqq)
    }
  })
}
export default{
  Store,
  install,
}

 