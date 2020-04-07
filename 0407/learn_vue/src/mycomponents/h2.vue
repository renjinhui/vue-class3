<template>
    <div>
        <slot name='zf'></slot>
        <i><slot>珠峰</slot></i>
        <slot name='world'></slot>
        <!-- 
          <slot></slot>  代表了 my-h2标签内部包含的内容 
          slot 标签里边的内容 是默认的展示值（当my-h2标签为空标签时展示）
          -->
    </div>
</template>
<script>
// @ is an alias to /src
export default {

    data() {
        return {
        
        }
    },
    components: {
        
    }
}
</script>
<style lang="less" scoped>
  div{
    background: salmon;
    color:#fff;
    font-size:25px;
  }
</style>