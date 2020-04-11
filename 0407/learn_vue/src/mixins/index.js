import Vue from 'vue'
Vue.mixin({
  // 混入 就是把这个对象合并到 每一个实例对应的对象中
  // 优先执行 混入对象中的方法
  data(){
    return{
      // 若data中的属性名重复 自己组件中的属性会覆盖混入的属性
      qqqq:1234
    }
  },
  methods:{
    // 若methods中的属性名重复 自己组件中的属性会覆盖混入的属性
    aaa(){}
  },
  created(){
    // 先执行 混入的钩子函数 再执行自己的组件的钩子函数；
    console.log(6666)
  }
})
export const obj = {
  data(){
    return {
      qqq:123
    }
  }
}