let http = require('http');
let url = require('url');
let { readFile } = require('./promiseFs');

http.createServer((request, response) => {
  // console.log(url.parse(request.url, true))
  let { pathname } = url.parse(request.url, true);
  switch (pathname) {
    case '/':
      readFile('./page/index.html').then(data => {
        response.end(data)
      }).catch(err => {
        console.log(err)
      })
      break;
    case '/1.css':
      readFile('./page/1.css').then(data => {
        response.end(data)
      }).catch(err => {
        console.log(err)
      })
      break;
    case '/1.js':
      readFile('./page/1.js').then(data => {
        response.end(data)
      }).catch(err => {
        console.log(err)
      })
      break;
    case '/imgs/1.png':
      readFile('./page/imgs/1.png',null).then(data => {
        response.end(data)
      }).catch(err => {
        console.log(err)
      })
      break;
    case '/imgs/2.png':
      readFile('./page/imgs/2.png',null).then(data => {
        response.end(data)
      }).catch(err => {
        console.log(err)
      })
      break;
    case '/favicon.ico':
      readFile('./page/favicon.ico',null).then(data => {
        response.end(data)
      }).catch(err => {
        console.log(err)
      })
      break;
    default:
      response.end('666');
      break;
  }


}).listen(5000, function () {
  console.log('后台服务起于5000端口')
})