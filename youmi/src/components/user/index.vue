<template>
  <div class='user_box'>
    <div class="head_box" @click='cell_click("/edit")'>
      <div class="img_box">
        <img
          src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_default_head.png"
          alt=""
        >
      </div>
      <div class="name_box">
        {{isLogin ? isLogin : "未登录"}}
      </div>
      <!--  若是登录状态下 则不需要展示 小箭头 -->
      <van-icon v-if='!isLogin' name="arrow" />
    </div>

    <van-cell
      title="我的订单"
      is-link
      @click='cell_click("/myorder")'
    />
    <van-cell
      title="我的资产"
      icon="card"
      is-link
      @click='cell_click("/myassets")'
    />
    <van-cell
      title="我的收藏"
      icon="invition"
      is-link
      @click='cell_click("/mycollection")'
    />

    <van-cell
      is-link
      @click='cell_click("/location")'
    >
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <van-icon name="location" />
        <span class="custom-title">地址管理</span>
      </template>
    </van-cell>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "UESR",
  data() {
    return {};
  },
  computed: {
      isLogin(){
          return this.$store.state.userInfo.name
        // return this.$store.getters.loginState
      }
  },
  methods: {
      cell_click(str){
          if(this.isLogin){
              this.$router.push(str)
          }else{
              this.$router.push('/login?from='+str)
          }
      }
  },
  components: {}
};
</script>
<style lang="less">
.user_box {
    text-align: left;
  .head_box {
    height: 150px;
    display: flex;
    align-items: center;
    background-color: rgb(160, 62, 16);
    .img_box {
      width: 100px;
      height: 100px;
      img {
        width: 70%;
        position: relative;
        top: 15px;
      }
    }
    .name_box {
      color: #fff;
      font-size: 25px;
      flex: auto;
    }
    .van-icon-arrow {
      width: 20px;
      height: 20px;
      display: block;
      color: #fff;
      font-size: 25px;
    }
  }
}
</style>