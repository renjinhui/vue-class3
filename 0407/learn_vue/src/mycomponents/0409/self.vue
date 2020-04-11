<template>
    <div>
        <h2 v-color='color'>这是自定义指令的地方</h2>
        <h2 v-color='color'>这是自定义指令的地方</h2>
        <h2 v-color='color'>这是自定义指令的地方</h2>
        <h2 v-color>这是自定义指令的地方</h2>

        <button v-permission='6'>编辑6</button>
        <button v-permission='0'>编辑0</button>
        <button v-permission='2'>编辑2</button>
        <input v-focus/>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
          color:'blue'
        }
    },
    components: {
        
    },
    directives:{
      color(el,bindings){
        el.style.color = bindings.value || '#333'
        console.log(el,bindings)
      }
    }
}
</script>
<style lang="less">

</style>