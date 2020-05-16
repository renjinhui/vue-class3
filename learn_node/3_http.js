let http = require('http');
http.createServer(function (request,response) {
  // request 是前端给的请求信息
  // response 是后端用的响应信息
  response.end('666')
}).listen(8000,function(){
  console.log('当前服务起于8000端口')
})