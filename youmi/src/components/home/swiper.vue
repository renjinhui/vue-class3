<template>
  <van-swipe :autoplay="3000" class='my-swipe'>
    <van-swipe-item
      v-for="(image, index) in images"
      :key="index"
    >
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
// @ is an alias to /src
import {getBanner} from '@/common/api'
export default {
  name: "XXX",
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  created(){
    this.init();
  },
  methods: {
    init(){
      getBanner().then(data=>{
        console.log(data)
        this.images = data.data;
      })
    }
  },
  components: {}
};
</script>
<style lang="less">
  .my-swipe{
    width: 100%;
    height: 160px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
</style>