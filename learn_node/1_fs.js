let fs = require('fs');
// I/O 操作： 文件读写操作  input  output 
// fs.readFile(文件路径，编码格式，回调函数)  是一个异步函数
/* fs.readFile('./readme.md','utf-8',(err,data)=>{
  // 若err 不是null 那就证明 我们读文件失败了  data就是undefined
  // 若err 是  null  那就证明都成功了 data 就是文件中的内容
  // console.log(err)
  // console.log(data)
  if(!err){
    console.log(data)
  }
}) */
/* let  data = fs.readFileSync('./readme123.md','utf-8');// 同步读取
console.log(data);
console.log(666) */


/* fs.readdir('./nodejs',null,(err,data)=>{
  if(!err){
    // data 是个数组  数组中存储的是 文件夹下的文件名或者文件夹名
    // console.log(data)
    data.forEach(item=>{
      if(/\./.test(item)){
        // item 就是 文件的名字 不再是文件夹了
        console.log(item)
        fs.readFile('./nodejs/'+item,'utf-8',(er,dat)=>{
          if(!er){
            console.log(item,dat)
          }
        })
      }
    })
  }
}) */
// fs.readdirSync()// 同步读取文件夹
/* fs.mkdir('./test',(err)=>{
  if(!err){
    console.log('success')
  }
}) */
// fs.mkdirSync() // 同步创建

/* fs.rmdir('./qqq',(err)=>{
  // 文件需要时空文件夹 才能删除成功
  console.log(err)
})
fs.unlink() //删除文件 */


/* fs.writeFile('./1.txt',"666",'utf-8',(err)=>{
  console.log(err)
})
fs.writeFile('./2.txt',"你好 珠峰",'utf-8',(err)=>{
  console.log(err)
})
// fs.writeFileSync() //同步写入
// 写入时 若不存在对应的文件 则会默认创建一个，有的话就直接写入；

fs.appendFile('./1.txt',"666",'utf-8',(err)=>{
  console.log(err)
}) */
/* fs.mkdir
fs.rmdir
fs.writeFile
fs.appendFile */
/* var data = {
  a:123,
  b:234
}
fs.writeFile('./json/1.json',JSON.stringify(data),'utf-8',(err)=>{
  console.log(err)
}) */
function append(url,data){
  fs.readFile(url,'utf-8',(err,val)=>{
    if(!err){
      console.log(typeof val)
      val = JSON.parse(val);
      Object.assign(val,data);
      fs.writeFile(url,JSON.stringify(val),'utf-8',(err)=>{
        if(!err){
          console.log('写入成功')
        }
      })
    }
  })
}
append('./json/1.json',{c:234})