<template>
    <div>
        商品详情页
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
    created(){
      console.log(this.$route.params.goodsId)
    },
    components: {
        
    }
}
</script>
<style lang="less">

</style>