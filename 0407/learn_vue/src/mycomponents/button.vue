<template>
    <div>
        <h2>这是我自己的button组件</h2>
        <button @click='fn'>{{text}}</button>
    </div>
</template>
<script>
// @ is an alias to /src
// props data methods computed 这四个属性中的属性名都是不能重复的
export default {
    props:['qqq','name','text'],
   /*  props:{
      qqq:{
        type:Number,// 类型检测
        default:100,// 默认值
        required:true, // 是否必传
        validator:function(val){
          // val 就是qqq属性对应的那个值
          // return false;
          // 用户自己定义了一个规则 就是传进来的值必须大于100
          return val > 100
        }
      },
      text:{
        default:100
      }
    }, */
    data() {
        return {
          // text:"局部组件按钮"
        }
    },
    created() {
      console.log(this)
    },
    methods: {
      fn(){
        this.text = 888;
      }
    },
}
</script>
<style lang="less" scoped>
  h2{
    color:red
  }
</style>