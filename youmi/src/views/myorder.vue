<template>
    <div class='qqq'>
      <div v-for='item in data'>
          {{item.name}}
          <myorder :data='item.children'></myorder>
      </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'myorder',
    props:['data'],
    data() {
        return {
        
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">

</style>