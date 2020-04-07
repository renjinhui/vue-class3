<template>
  <div id="app">
    <h1>{{name}}</h1>

    <my-input v-model='name'></my-input>
  
    <!-- <my-input :value='name' @input='(v)=>name=v'></my-input> -->


    <h2>{{name}}</h2>
    <mychild 
      @mychange='fn' 
      @myqqqfn = 'fn'
      :data='ary' 
      data2='23425' 
      class='qqq' 
      ref='qqqq'></mychild>
    <!-- 
      APP 组件使用了 myButton组件  那么 我们成 APP 是 myButton 的父组件
     -->
     <!-- 
       数据的 父传子  在父组件使用子标签的时候 在子标签的行内添加属性
                      在子组件内部 使用 props接受
       数据的 子传父  父组件使用子组件的数据 或者 叫  子组件修改父组件的数据
                      通过自定义事件的方式传递； 对应的事件 在子组件中被触发，然后通过传参数的方式 把
                      子组件的数据传给父组件使用；

        $refs  $children  $parent : 原理就是让我们可以直接获取到对应的组件，这样组件中的数据和方法我们就都能获取到；  

        $attrs  获取的是 没有被props接受的哪些传递给子组件的参数
          $listeners  传递给子组件的那些自定义事件；  

        prvide/inject      
      -->
    <!-- <my-button :qqq='123' :name='name' text='666'></my-button> -->


    <my-h2>你好世界</my-h2>
    <my-h2></my-h2>
    <my-h2>
      <strong>你好</strong>
      <!-- <h3 slot='world'>世界</h3>
      <i slot='zf'>珠峰</i> -->
      <template v-slot:world>
        <h3 >世界</h3>
      </template>
      <template  v-slot:zf>
        <i>珠峰</i>
      </template>
      
    </my-h2>
  </div>
</template>
<script>
// @ 代表的就是src 这一级
import myButton from '@/mycomponents/button'
import mychild from '@/mycomponents/child'
import myInput from '@/mycomponents/input'
import myH2 from '@/mycomponents/h2'
export default {
  data(){
    return {
      name:"珠峰",
      ary:[1,2,3,{q:123}]
    }
  },
  created() {
    // console.log(this.$children[0].childName)
  },
  mounted() {
    // console.log(this.$refs.qqqq)
    // console.log('app mounted')
    // console.log(this.$children[0].childName)
  },
  methods: {
    fn(val){
      // val 就是子组件传进来的数据
      // console.log(arguments);
      this.name = val;
    }
  },
  components:{
    'my-button':myButton,mychild,myInput,myH2
  }
}
</script>
<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
