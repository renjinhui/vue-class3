<template>
  <div id="app" class='app'>
    <h1>
      <!-- router-link 也是router提供的一个全局组件  默认渲染成a标签 tag属性可以设置渲染的标签 -->
      <router-link tag='button' to="/">首页</router-link>
      <router-link tag='button' to="/about">关于</router-link>
    </h1>
    <router-view ></router-view>

  </div>
</template>
<script>
export default {
  data(){
    return {
      name:"珠峰",
      qqqq:6666
    }
  },
  created(){
    console.log(this)
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
