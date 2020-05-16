let path = require('path');// 用来处理路径
const url = require('url');// 一般用来处理 路径上的参数
// __dirname 就是当前文件所在文件夹的绝对目录
// node的每一个JS文件 你就理解成一个闭包 里边有局部变量
// require  module  exports  __dirname  __filename
// console.log(__dirname,__filename)
// exports.qqq = 123
// console.log(path.resolve('./qqq'))
// console.log(path.join('./qqq','wwww'))
console.log(path.join(__dirname,'aaa'))
console.log(path.resolve('./aaa'))

let str = 'http://www.bai.com?qq=123&bbb=345&ccc=666';
console.log(url.parse(str))
console.log(url.parse(str,true).query.ccc)// 把query变成对象
module.exports = {}