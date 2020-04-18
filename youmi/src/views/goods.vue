<template>
  <div class='goodsInfo_box'>
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <div class="goods_box">
      <van-swipe 
				class = 'swipe'
        :autoplay="3000"
        @change="onChange"
      >
        <van-swipe-item
          v-for="(image, index) in images"
          :key="index"
        >
          <img v-lazy="image" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/{{images.length}}
          </div>
        </template>
      </van-swipe>
      <div class="price">
        <span>￥1999</span>起
      </div>
      <div class="title">好用的的商品</div>

      <van-cell
        title="已选"
        value='商品'
        is-link
				@click='showSku'
      />
      <van-cell
        title="送至"
        value='地址'
        is-link
      />

      <!-- SKU部分 -->
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :hide-stock="sku.hide_stock"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />

      <van-goods-action>
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          :badge="goodsCount"
					@click='$router.push("/cart")'
        />
        <van-goods-action-icon
          icon="shop-o"
          text="店铺"
        />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
					@click='showSku'
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
					@click='showSku'
        />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import {getGoodsInfo} from '@/common/api'
import {mapGetters} from 'vuex'
export default {
	name: "GOODSINFO",
  data() {
    return {
      images: [
        "https://img.youpin.mi-img.com/youpinoper/89611cce47287279bac34adfbcccbfc9.jpg",
        "https://img.youpin.mi-img.com/youpinoper/9ca9ace12886994fb854b7555d9e74f5.jpg"
      ],
      current: 0,
      show:false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
                {
									id: '30349', // skuValueId：规格值 id
									name: '红色', // skuValueName：规格值名称
									imgUrl: 'https://img.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
									previewImgUrl: 'https://img.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
                },
                {
									id: '1215',
									name: '蓝色',
									imgUrl: 'https://img.yzcdn.cn/2.jpg',
									previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
                },
                {
									id: '1216',
									name: '黑色',
									imgUrl: 'https://img.yzcdn.cn/2.jpg',
									previewImgUrl: 'https://img.yzcdn.cn/2p.jpg',
                }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
					},
					{
						k: '尺码', // skuKeyName：规格类目名称
            v: [
                {
									id: '111', // skuValueId：规格值 id
									name: 'S', // skuValueName：规格值名称
									},
                {
									id: '222',
									name: 'M'
                },
                {
									id: '333',
									name: 'L'
                },
                {
									id: '444',
									name: 'XL'
                },
                {
									id: '555',
									name: 'xxL'
                }
            ],
            k_s: 's2'
					}
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
            {
							id: 2259, // skuId，下单时后端需要
							price: 110, // 价格（单位分）
							s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
							s2: '111', // 规格类目 k_s 为 s2 的对应规格值 id
							s3: '0', // 最多包含3个规格值，为0表示不存在该规格
							stock_num: 10 // 当前 sku 组合对应的库存
						},
						{
							id: 2259, // skuId，下单时后端需要
							price: 110, // 价格（单位分）
							s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
							s2: '555', // 规格类目 k_s 为 s2 的对应规格值 id
							s3: '0', // 最多包含3个规格值，为0表示不存在该规格
							stock_num: 10 // 当前 sku 组合对应的库存
						},
						{
							id: 2259, // skuId，下单时后端需要
							price: 140, // 价格（单位分）
							s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
							s2: '222', // 规格类目 k_s 为 s2 的对应规格值 id
							s3: '0', // 最多包含3个规格值，为0表示不存在该规格
							stock_num: 60 // 当前 sku 组合对应的库存
						},
						{
							id: 2259, // skuId，下单时后端需要
							price: 140, // 价格（单位分）
							s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
							s2: '333', // 规格类目 k_s 为 s2 的对应规格值 id
							s3: '0', // 最多包含3个规格值，为0表示不存在该规格
							stock_num: 60 // 当前 sku 组合对应的库存
						},
						{
							id: 2259, // skuId，下单时后端需要
							price: 180, // 价格（单位分）
							s1: '1216', // 规格类目 k_s 为 s1 的对应规格值 id
							s2: '444', // 规格类目 k_s 为 s2 的对应规格值 id
							s3: '0', // 最多包含3个规格值，为0表示不存在该规格
							stock_num: 6 // 当前 sku 组合对应的库存
            }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods:{
          picture: 'https://img.yzcdn.cn/2.jpg'
      },
      goodsId:123
    };
  },
  created() {
		this.getData();
  },
  methods: {
		getData(){
			getGoodsInfo(this.$route.params.goodsId).then(data=>{
				console.log(data);
				this.images = data.data.images;
				this.sku = data.data.sku;
				this.goods = data.data.goods;
				this.goodsId = data.data.goodsId;
			})
		},
    onChange(item) {
      this.current = item;
    },
    onClickLeft() {
      this.$router.back();
		},
		showSku(){
			this.show = true;
		},
    onClickRight() {},
    onBuyClicked(){
			this.show = false;
		},
    onAddCartClicked(item){
			this.show = false;
			console.log(arguments)
			item.isSelect = true;
			item.img = this.goods.picture;
			this.$store.commit('addCartList',item)
		}
  },
  computed: {
		...mapGetters(['goodsCount'])
	},
};
</script>
<style lang="less">
.goodsInfo_box {
  text-align: left;
  .goods_box {
		.swipe{
			img {
				width: 100%;
			}
		}
    .custom-indicator {
      position: absolute;
      z-index: 10;
      bottom: 20px;
      right: 10px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.3);
      padding: 2px 5px;
      border-radius: 3px;
      color: #fff;
    }
    .price {
      color: rgb(240, 128, 128);
      font-size: 15px;
      padding: 10px;
      > span {
        font-size: 25px;
      }
    }
    .title {
      font-size: 25px;
      padding: 10px;
    }
  }
}
</style>