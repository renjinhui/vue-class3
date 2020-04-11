<template>
    <div>
        home2
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
            
        }
    },
    computed: {
        // count(){
        //     return this.$store.state.count
        // }
        count:{
            get(){
                return this.$store.state.count
            },
            set(val){
                this.$store.commit('changeCount',val)
            }
        }
    },
}
</script>
<style lang="less">

</style>