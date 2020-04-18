<template>
    <ul class='card_box'>
        <li v-for='(item,index) in data' :key='index'>
          <router-link :to='{name:"goodsInfo",params:{goodsId:item.id}}'>
            <div class="img_box">
              <img :src="item.img" alt="">
            </div>
            <h3 class="til">{{item.til}}</h3>
            <div class="desc">{{item.desc}}</div>
            <div class="price">￥{{item.price|money}}起</div>
          </router-link>
        </li>
    </ul>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'CARD',
    props:['data'],
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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .desc,.price{
        padding: 0 5px;
         overflow: hidden;      
        text-overflow: ellipsis;      
        display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */      
        -webkit-line-clamp: 2; /* 控制最多显示几行 */      
        -webkit-box-orient: vertical; 
      }
      .price{
        color:red;
      }
    }
  }
</style>