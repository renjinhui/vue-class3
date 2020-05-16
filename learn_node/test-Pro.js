let {readFile,writeFile} = require('./promiseFs');
// writeFile('./json/2.json',JSON.stringify([1,2,3,4])).then(data=>{
//   console.log(data)
// })
readFile('./json/1.json').then(data=>{
  console.log(data)
})