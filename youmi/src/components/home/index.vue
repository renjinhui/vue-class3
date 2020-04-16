<template>
    <div class='home_box'>
        <!-- 轮播图部分 -->
        <mySwiper></mySwiper>

        <!-- 首页导航部分 -->
        <van-grid :column-num="5" class='home_navs_box'>
            <van-grid-item v-for="value in 10" :key="value">
                <van-image src="https://img.youpin.mi-img.com/jianyu/548747b208d49dc822cce9b021ee163e.png@base@tag=imgScale&h=100&m=1&q=80&w=100" />
                <h3 class='til'>小米油品</h3>
            </van-grid-item>
        </van-grid>

        <!-- tabs切换部分 -->
        <van-tabs class='tabs_box' @change='changeTab'>
            <van-tab 
                v-for="index in ary" 
                :title="index"
                :name='index+"6666"'
            >
                <myCard></myCard>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
// @ is an alias to /src
import mySwiper from './swiper'
import myCard from './card'
export default {
    name: 'XXX',
    data() {
        return {
            ary:['小敏1','小敏2','小敏3','小敏4','小敏5','小敏6']
        }
    },
    components: {
        mySwiper,myCard
    },
    methods: {
        changeTab(){
            console.log(arguments)
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