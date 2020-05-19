let express = require('express');
let route = express.Router();

route.post('login',function(req,res){
  //当前端 访问的接口时 /qqq/login 会走这个函数
})

module.exports = route;