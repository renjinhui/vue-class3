<template>
    <div>
        商品详情页666
        <myorder :data=ary></myorder>
    </div>
</template>
<script>
// @ is an alias to /src
import myorder from './myorder.vue'
export default {
    name: 'XXX',
    data() {
        return {
            ary:[
                {
                    name:'zhufeng',
                    children:[
                        {
                            name:"666",
                            children:[{
                                name:'888'
                            }]
                        }
                    ]
                },
                {
                    name:'zhufeng234',
                    children:[
                        {
                            name:"11111",
                            
                        }
                    ]
                }
            ]
        }
    },
    created(){
      console.log(this.$route.params.goodsId)
    },
    components: {
        myorder
    }
}
</script>
<style lang="less">

</style>