let http = require('http');
let url = require('url');
let { readFile } = require('./promiseFs');

http.createServer((request, response) => {
  // console.log(url.parse(request.url, true))
  let { pathname } = url.parse(request.url, true);
  if(pathname == '/'){
    readFile('./page/index.html').then(data => {
      response.end(data)
    }).catch(err => {
      console.log(err)
    })
  }else{
    if(/\.(\w+)/.test(pathname)){
      readFile('./page'+pathname).then(data => {
        response.end(data)
      }).catch(err => {
        console.log(err)
      })
    }else{
      // 如是接口请求 走到这里
      console.log(pathname)
      response.statusCode = '405';//后端给前端的http状态码
      response.statusMessage = 'method wrong'
      response.end('123456')
    }
  }
}).listen(5000, function () {
  console.log('后台服务起于5000端口')
})