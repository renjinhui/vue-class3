<template>
  <div class='login_box'>
    <van-image
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
// @ is an alias to /src
import { loginFn } from "@/common/api";
import { Dialog } from "vant";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      loginFn({ account: this.username, password: this.password }).then(
        data => {
          if (data.code == 1) {
            // 登录失败
            Dialog.alert({
              title: "警告",
              message: "用户名密码错误 请重试！"
            }).then(() => {
              // on close
              this.username = '';
              this.password = '';// 对称加密和非对称加密（md5）
            });
          }else{
            let str = this.$route.query.from || '/home'
            this.$router.push(str);
            localStorage.setItem('userInfo',JSON.stringify(data));
            this.$store.commit('changeUserInfo',data)
          }
        }
      );
    }
  },
  components: {}
};
</script>
<style lang="less">
.login_box {
  height: 100vh; //满屏高
  .van-form {
  }
}
</style>