<template>
    <ul>
        <li v-for='item in list' :key='item.a'>
          <!-- {{item.a}} -->
          <slot :data123='item' name='zf'></slot>
        </li>
    </ul>
</template>
<script>
// @ is an alias to /src
export default {
    props:['list'],
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