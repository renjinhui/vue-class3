<template>
    <ul class='card_box'>
        <li v-for='index in 8'>
          <router-link :to='{name:"goodsInfo",params:{goodsId:index}}'>
            <div class="img_box">
              <img src="https://img.youpin.mi-img.com/shopmain/14a6181a991adee0543bfc07a98dced3.jpg@base@tag=imgScale&h=342&w=342" alt="">
            </div>
            <h3 class="til">小米</h3>
            <div class="desc">描述</div>
            <div class="price">￥1999起</div>
          </router-link>
        </li>
    </ul>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
        
        }
    },
    components: {
        
    }
}
</script>
<style lang="less">
  .card_box{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:13px;
    background-color: #eee;
    font-size:15px;
    text-align: left;
    >li{
      width:171px;
      margin-bottom: 10px;
      background-color: #fff;;
      .img_box{
        width: 100%;
        height: 171px;
        overflow: hidden;
        img{
          width: 100%;;
        }
      }
      .til{
        padding: 5px;
      }
      .desc,.price{
        padding: 0 5px;
      }
      .price{
        color:red;
      }
    }
  }
</style>