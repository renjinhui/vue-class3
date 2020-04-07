<template>
    <div>
        <input type="text" v-model='childName'>
        <button @click='change'>修改</button>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    props:['data','data2'],
    data() {
        return {
          childName:666
        }
    },
    created() {
      console.log(this.data,this.data2)
      // console.log('child created')
    },
    mounted() {
      console.log(this)

    },
    methods: {
      change(){
        this.$emit('mychange',this.childName,5,6,7,89,4,3,67,8,)
      }
    },
}
</script>
<style lang="less">

</style>