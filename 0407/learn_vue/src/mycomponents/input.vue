<template>
    <div>
        <h1><i>这是自己的input框</i></h1>
        <input type="text" :value='value' @input='fn'>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    props:['value'],
    data() {
        return {
        
        }
    },
    methods: {
      fn(e){
        this.$emit('input',e.target.value)
      }
    },
    components: {
        
    }
}
</script>
<style lang="less">

</style>