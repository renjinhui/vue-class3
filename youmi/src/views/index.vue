<template>
    <div>
        <router-view></router-view>
        <botNav></botNav>
        <div class="height_50"></div>
    </div>
</template>
<script>
import botNav from '@/components/botNav.vue'
export default {
  components:{
    botNav
  }
}
</script>
<style lang="less">
  .height_50{
    height: 50px;
  }
</style>
