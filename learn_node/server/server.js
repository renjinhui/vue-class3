let express = require('express');
let qs = require('qs');
let {readFile,writeFile} = require('../promiseFs');

let app = express();
app.listen(8000,function(){
  console.log('服务起于 8000端口')
})
app.use((req,res,next)=>{
  // cors
  res.header('Access-Control-Allow-Origin','http://127.0.0.1:5500');//解决跨域
  next();
})
app.use((req,res,next)=>{
  let str = '';
  req.on('data',function(chunk){
    str += chunk;
  })
  req.on('end',function(){
    let obj = {};
    try {
      obj = JSON.parse(str);// 前端传递的是JSON字符串
    } catch (error) {
      obj = qs.parse(str)// 前端传递的是search字符串
    }
    req.postData = obj;
    next();
  })
})

// 把读取文件的操作也写在中间件上
app.use((req,res,next)=>{
  readFile('./data/todo.json').then(data=>{
    console.log(data,'-------------')
    req.todoData = JSON.parse(data)
    next()
  }).catch(err=>{
    res.status(500);
    res.send('');
  })
})

app.get('/list',function(req,res){
  res.send({
    code:0,
    data:req.todoData
  })
})
app.post('/add',function(req,res){
  // red.postData 存储的是前端给的信息
  let ary = req.todoData;
  ary.push(req.postData);
  writeFile('./data/todo.json',JSON.stringify(ary)).then(data=>{
    res.send({
      code:0,
      data:'success'
    })
  }).catch(err=>{
    res.status(500)
    res.send('')
  })
})
