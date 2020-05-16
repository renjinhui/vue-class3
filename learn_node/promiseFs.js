let fs = require('fs');
let obj = {};
// readFile readir  writetFile mkdir rmdir  unlink appendFile
/* obj.readFile = function(url,encoding=null){
  return new Promise((res,rej)=>{
    fs.readFile(url,encoding,(err,data)=>{
      if(!err){
        res(data)
      }else{
        rej(err)
      }
    })
  })
} */
['readFile', 'readir'].forEach(item => {
  obj[item] = function (url, encoding = null) {
    if (/\.(js|css|html)/.test(url)) {
      encoding = 'utf-8'
    }
    return new Promise((res, rej) => {
      fs[item](url, encoding, (err, data) => {
        if (!err) {
          res(data)
        } else {
          rej(err)
        }
      })
    })
  }
});
['writeFile','appendFile'].forEach(item=>{
  obj[item] = function(url,data,encoding='utf-8'){
    return new Promise((res,rej)=>{
      fs[item](url,data,encoding,(err)=>{
        if(!err){
          res('success')
        }else{
          rej(err)
        }
      })
    })
  }
});
['mkdir','unlink','rmdir'].forEach(item=>{
  obj[item] = function(url){
    return new Promise((res,rej)=>{
      fs[item](url,(err)=>{
        if(!err){
          res()
        }else(
          rej(err)
        )
      })
    })
  }
});


module.exports = obj;