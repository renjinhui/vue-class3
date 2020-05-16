let express = require('express');
let qs = require('qs');
// express 就是 node  的一个 库；类似于 JQ 对 JS
let app = express();
app.listen(8000,function(){
  console.log('后端服务起于8000')
})
// express 使用中间件  use(回调函数)
app.use((req,res,next)=>{
  req.qqq = 1234;
  next();
})
app.use((req,res,next)=>{
  res.header('haha',req.qqq);// set  responseHeader 设置响应头
  next();
})
app.use(express.static('./page'))// 把 page当作静态返回的页面


// 设置接口
app.get('/list',function(req,res){
  // 若前端请求的路径是 /list 并且是get请求 。则该回调函数起作用
  console.log(req.query)// 可以通过 req.query 获取前端传递的参数
  res.send({
    name:'珠峰',
    age:11
  })
})
app.post('/add',function (req,res) {
  let str = '';
  req.on('data',function(chunk){
    // 该事件是用来接收请求体的
    // chunk 前端传递的数据流
    str += chunk;
  })
  req.on('end',function(){
    // console.log(JSON.parse(str))
    try {
      console.log(JSON.parse(str))
    } catch (error) {
      console.log(qs.parse(str))
    }
    // 接收完成之后再去响应
    res.send({
      code:0,
      message:"success"
    })
  })
  
})
