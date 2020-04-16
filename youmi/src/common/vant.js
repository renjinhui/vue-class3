import Vue from 'vue'
import { Button,Icon ,Swipe, SwipeItem,Lazyload,Grid, GridItem,Image,Tab, Tabs  } from 'vant';
let ary = [Button,Icon,Swipe, SwipeItem,Lazyload,Grid, GridItem ,Image ,Tab, Tabs]
// Vue.use(Button)
// Vue.use(Icon)
ary.forEach(item=>{
  Vue.use(item)
})