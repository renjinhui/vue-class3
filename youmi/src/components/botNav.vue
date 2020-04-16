<template>
  <ul class='bot_nav_box'>
    <li>
      <router-link to="/home">
        <van-icon name="wap-home-o" />
        <van-icon
          name="wap-home"
          class='hide'
        />
        <div>首页</div>
      </router-link>
    </li>
    <li>
      <router-link to="/classify">
        <van-icon name="shop-o" />
        <van-icon
          name="shop"
          class='hide'
        />
        <div>分类</div>
      </router-link>
    </li>
    <li>
      <router-link to="/cart">
        <van-icon name="cart-o" />
        <van-icon
          name="cart"
          class='hide'
        />
        <div>购物车</div>
      </router-link>
    </li>
    <li>
      <router-link to="/user">
        <van-icon name="manager-o" />
        <van-icon
          name="manager"
          class='hide'
        />
        <div>我的</div>
      </router-link>
    </li>
    <!-- <li class='iconfont icon-aixin'></li> -->
  </ul>
</template>
<script>
// @ is an alias to /src
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less">
.bot_nav_box {
  font-size: 13px;
  position: fixed;
  box-shadow: 0px -1px 6px 1px #ccc; // 盒子阴影
  background-color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center; // 保证子元素上下居中；
  > li {
    flex: 1;
    > a {
      color: #333;
      i {
        display: block;
      }
      .hide {
        display: none;
      }
      &.router-link-active {
        // 有这个类名的a标签
        color: sandybrown;
        i {
          display: none;
        }
        .hide {
          display: block;
        }
      }
    }
    .van-icon {
      font-size: 25px;
    }
  }
}
</style>