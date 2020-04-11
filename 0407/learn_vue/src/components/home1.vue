<template>
    <div>
        home1
        <input type="text" v-model='count'>
        {{$store.state.count}}
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
            count:10
        }
    },
    created() {
      console.log(this)
    },
    components: {
        
    },
    watch:{
        count(newVal,oldVal){
            // this.$store.state.count = newVal
            this.$store.commit('changeCount',newVal,1,2,3,4,5)
        }
    }
}
</script>
<style lang="less">

</style>