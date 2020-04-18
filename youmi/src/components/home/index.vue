<template>
    <div class='home_box'>
        <!-- 轮播图部分 -->
        <mySwiper></mySwiper>

        <!-- 首页导航部分 -->
        <van-grid :column-num="5" class='home_navs_box'>
            <van-grid-item v-for="(item,index) in navs" :key="index">
                <van-image :src="item.img" />
                <h3 class='til'>{{item.til}}</h3>
            </van-grid-item>
        </van-grid>

        <!-- tabs切换部分 -->
        <van-tabs class='tabs_box' @change='changeTab'>
            <van-tab 
                v-for="index in ary" 
                :title="index"
                :name='index'
            >
                <myCard :data='goodsList'></myCard>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
// @ is an alias to /src
import mySwiper from './swiper'
import myCard from './card'
import {getNavs123,getGoodsList} from '@/common/api'
export default {
    name: 'HOME',
    data() {
        return {
            ary:['小敏1','小敏2','小敏3','小敏4','小敏5','小敏6'],
            navs:[],
            goodsList:[]
        }
    },
    created() {
        this.getNavs();
        this.getGoodsList(this.ary[0])
    },
    components: {
        mySwiper,myCard
    },
    methods: {
        changeTab(name){
            this.getGoodsList(name)
        },
        getNavs(){
            // 组件内部的 封装的请求 navs数据的函数
            getNavs123().then(data=>{
                // console.log(data)
                this.navs = data.data || [];
            })
        },
        getGoodsList(type){
            getGoodsList(type).then(data=>{
                this.goodsList = data.data;
            })
        }
    },
}
</script>
<style lang="less">
    .home_box{
        .home_navs_box{
            padding-top: 10px;
            .van-grid-item__content::after{
                border:none;
            }
            h3{
                font-size:12px;
            }
            .van-grid-item__content{
                padding:5px 10px
            }
        }
        .tabs_box{
            padding-top: 10px;
            border:none;
            background-color: #fff;;
        }
    }
</style>