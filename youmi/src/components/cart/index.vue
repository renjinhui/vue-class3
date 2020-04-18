<template>
  <div class='cart_box'>
    <van-nav-bar
      title="购物车"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>

    <ul class='goods_list' v-if='list.length'>
      <li v-for='(item,index) in list'>
        <van-checkbox
          v-model="item.isSelect"
          checked-color="#07c160"
        />
        <div class="img_box">
          <img
            :src="item.img"
            alt=""
          >
        </div>
        <div class="content_box">
          <div class="til_box">佳尼特大流量净水器 1.6L/min出水直饮机min出水直饮机</div>
          <div class="bot_box">
            <span>￥{{item.selectedSkuComb.price}}</span>
            <van-stepper v-model="item.selectedNum" />
          </div>
        </div>
      </li>
    </ul>
    <van-empty description="暂无商品" v-else />

    <van-submit-bar
      :price="total*100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox
        v-model="checkedAll"
        checked-color="#07c160"
      >全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template> -->
    </van-submit-bar>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'CART',
    data() {
        return {
            
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        onSubmit(){

        }
    },
    components: {
        
    },
    computed: {
        list(){
            return this.$store.state.cartList
        },
        checkedAll:{
            get(){
                return this.list.every(item=>item.isSelect)
            },
            set(val){
                this.list.forEach(item=>item.isSelect = val)
            }
        },
        total(){
            return this.list.reduce((prev,cur)=>{
                if(cur.isSelect){
                    return prev + cur.selectedSkuComb.price*cur.selectedNum
                }else{
                    return prev
                }
            },0)
        }
    },
}
</script>
<style lang="less">
.cart_box {
  font-size: 20px;
  .goods_list {
    padding: 10px;
    > li {
      display: flex;
      align-items: center;
      height: 100px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 5px;
      padding: 10px;
      .van-checkbox {
        width: 30px;
        height: 100%;
        flex: none;
      }
      .img_box {
        width: 80px;
        height: 80px;
        flex: none;
        overflow: hidden;
        background-color: #eee;
        > img {
          width: 100%;
        }
      }
      .content_box {
        flex: auto;
        position: relative;
        height: 80px;
        margin-left: 5px;
        .til_box {
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: 2;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: initi;
        }
        .bot_box{
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
            >span{
                font-size: 18px;
                color: rgb(161, 56, 56);
            }
        }
      }
    }
  }
}
</style>