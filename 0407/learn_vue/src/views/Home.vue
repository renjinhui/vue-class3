<template>
  <div class="home">
    <!-- <h1>{{$store.state.count % 2 ? "奇数" : "偶数"}}</h1>
    <h1>{{countType}}</h1>
    <router-link to="/home1?ww=123&bbb=345">home1</router-link>
    <router-link to="/home2">home2</router-link>
    <!-- <router-link :to="{path:'/home1',query:{a:123,b:234}}">home1</router-link>
    <router-link :to="{name:'Home2',query:{c:1,b:345}}">home2</router-link>
    <button @click='fn'>跳转home2</button> -->

    <!-- <router-link :to="{name:'Home1',params:{qqq:1234,www:345,a:666}}">home1</router-link>
    <router-link to="/home1/999/888">home1</router-link> -->
    <!-- <router-view></router-view> -->
    <h1>{{$store.state.count}}</h1>
    <h2>{{$store.getters.countType}}</h2>
    <button @click='add'>+</button>
    <button @click='min'>-</button>
    <h2>{{count}}</h2>
    <h2>{{countType}}</h2>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import {mapGetters} from 'vuex'
import {mapState,mapGetters} from '../store/myvuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    // fn(){
    //   setTimeout(()=>{
    //     // push的参数 等同于 to
    //     this.$router.push({path:'/home2',query:{qqq:123}})
    //     // this.$router.go(-1);
    //     // this.$router.back();
    //     // this.$router.replace({path:'/home2',query:{qqq:{a:123}}})
    //   },2000)
    // }
    add(){
      let n = this.$store.state.count;
      this.$store.commit('changeCount',++n)
    },
    min(){
      let n = this.$store.state.count;
      this.$store.dispatch('changeCountFn',--n)
    }
  },
  computed: {
    ...mapGetters(['countType']),
    ...mapState(['count'])
  },
}
</script>
<style lang="less">
.home,*{
  margin:0;
  padding:0
}
  img{
    width:600px;
  }
</style>
