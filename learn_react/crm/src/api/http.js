function http(option){
  let {url,data={},method='GET'} = option;
  let obj = {
    method
  }
  if(/get/i.test(method)){
    let str = '';
    Object.keys(data).forEach(key=>{
      str += `${key}=${data[key]}&`
    })
    url += ('?'+str);// 若是get 请求 则需要我们把参数拼接到url后边
  }else{
    Object.assign(obj,{
      body:JSON.stringify(data)
    })
  }
  return fetch(url,obj).then(data=>data.json())
}
http.get = function(url,data){
  return http({
    url,
    data,
    method:'get'
  })
}
http.post = function(url,data){
  return http({
    url,
    data,
    method:'post'
  })
}
export default http;