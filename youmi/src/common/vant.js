import Vue from 'vue'
import { Button,Icon ,Swipe, SwipeItem,Lazyload,Grid,
   GridItem,Image,Tab, Tabs,Form,Field,Dialog,Cell,NavBar,
   GoodsAction, GoodsActionIcon, GoodsActionButton,Sku ,Empty ,
   SubmitBar,Checkbox ,Stepper 
  } from 'vant';
let ary = [Button,Icon,Swipe, SwipeItem,Lazyload,Grid, 
  GridItem ,Image ,Tab, Tabs,Form,Field ,Dialog,Cell,NavBar ,
  GoodsAction, GoodsActionIcon, GoodsActionButton,Sku,Empty ,
  SubmitBar ,Checkbox ,Stepper  ]
// Vue.use(Button)
// Vue.use(Icon)
ary.forEach(item=>{
  Vue.use(item)
})