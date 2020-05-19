let express = require('express');
let qs = require('qs');
let app = express();
let session = require('express-session');
let { readFile, writeFile } = require('../promiseFs');
app.listen(8888, function () {
  console.log('后端起于 8888端口')
})
// cors  jsonp  proxy
// cors解决跨域
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');//解决跨域
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', "Content-Type,Content-Length,Authorization, Accept,X-Requested-With")
  res.header("Access-Control-Allow-Methods", 'PUT,POST,GET,DELETE,OPTIONS,HEAD');
  // res.header('set-cookie','a=123')
  next();
})

app.use(session({
  name: 'qqqqq',
  secret: 'zhufeng',//session 会根据这个字段生成一段字符
  saveUninitialized: false, // 强制将为初始化的session进行存储
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24*30
  }
}))

//接收 并处理 post传递的参数
app.use((req, res, next) => {
  let str = '';
  req.on('data', (chunk) => {
    str += chunk;
  })
  req.on('end', () => {
    let obj = {};
    try {
      obj = JSON.parse(str)
    } catch (error) {
      obj = qs.parse(str)
    }
    req.postData = obj;
    next();
  })
})

app.use((req, res, next) => {
  // 把读取到的用户信息都存储在userData这个属性中
  readFile('./data/user.json').then(data => {
    req.userData = JSON.parse(data);
    next();
  }).catch(err => {
    res.status(500);
    res.send('')
  })
})

// 使用 route 把接口 按照模块划分
// app.use('/qqq',require(''))

app.post('/reg', (req, res) => {
  let { username, psw } = req.postData;
  let data = req.userData;
  let bol = data.some(item => {
    return item.username === username
  })
  // 若bol是一个true 那么就证明 这个人之前已经注册过了
  if (bol) {
    res.send({
      code: 2,
      msg: 'already exits'
    })
    return;
  }
  data.push({ username, psw });// 把更改之后的数组 再写入到JSON文件中
  writeFile('./data/user.json', JSON.stringify(data)).then(data => {
    // 写入成功
    res.send({
      code: 0,
      msg: 'success'
    })
  }).catch(err => {
    res.send({
      code: 1,
      data: 'fail'
    })
  })
})
app.post('/login', (req, res) => {
  let { username, psw } = req.postData;
  let bol = req.userData.some(item => {
    return item.username === username && item.psw === psw
  })
  if (bol) {
    // 可以成功登录
    req.session.userId = username;// 体现在前端 就在前端种植了一个cookie;
    console.log('username',username)
    res.send({
      code: 0,
      data: {
        username
      }
    })
  } else {
    res.send({
      code: 3,
      msg: 'username or psw no match'
    })
  }
})
app.get('/info', (req, res) => {
  console.log(req.session.userId)
  res.send('123')
}) 