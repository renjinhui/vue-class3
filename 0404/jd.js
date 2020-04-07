Vue.filter('money',function(val=''){
  let str = (val/100).toFixed(2);
  let s = str.match(/(\d+)\.(\d+)/);
  return s[1].replace(/(\d{1,3})(?=(\d{3})+$)/g,'$1,')+'.'+s[2]
})
let vm = new Vue({
  el:"#app",
  data:{
    name:"珠峰",
    list:[],
    isShow:false,
    delId:''
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      // 获取数据的函数
      fetch('./data.json').then(res=>res.json()).then(data=>{
        console.log(data);
        this.list = data;
      })
    },
    del(id){
      this.isShow = true;
      this.delId = id;
    },
    cancle(){
      this.isShow = false
    },
    sure(){
      this.isShow = false;
      console.log(this.delId);
      this.list = this.list.filter(item=>item.id !== this.delId)
    },
    clear(){
      this.list = [];
    }
  },
  computed: {
    /* checkAll(){
      if(this.list.length == 0)return false;
      return this.list.every(item=>item.isSelect)
    } */
    checkAll:{
      get(){
        if(this.list.length == 0)return false;
        return this.list.every(item=>item.isSelect)
      },
      set(val){
        console.log(val)
        this.list.forEach(item=>item.isSelect = val)
      }
    },
    total(){
      return this.list.reduce((prev,next)=>{
        if(next.isSelect){
          // 当前的这条商品处于选中的状态
          return prev + next.count*next.price
        }else{
          return prev;
        }
      },0)
    }
  },
})