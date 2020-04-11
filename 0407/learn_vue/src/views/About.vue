<template>
  <div class="about">
    <h1>{{$store.state.login.name}}</h1>
    <h1>{{name}}</h1>
    <h1>{{count}}</h1>
    <h1>{{qqq}}</h1>
    <h1>{{www}}</h1>
    <button @click='fn'>惦记我</button>
    <button @click='changeCountFn(666)'>惦记我</button>
    <button @click='changeCount(888)'>惦记我</button>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  computed:{
    ...mapState(['count','qqq','www']),
    ...mapState({
      name:(state)=>state.login.name
    })
    /* count(){
      return this.$store.state.count
    },
    qqq(){
      return this.$store.state.qqq
    },
    www(){
      return this.$store.state.www
    } */
  },
  methods: {
    ...mapActions(['changeCountFn']),
    ...mapMutations(['changeCount']),
    // changeCountFn(val){
    //   this.$store.dispatch('changeCountFn',val)
    // }

    fn(){
      this.$store.commit('login/changeName')
    }
  },
}
</script>
