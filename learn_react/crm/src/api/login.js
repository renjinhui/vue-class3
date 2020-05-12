import http from './http'
import {message} from 'antd'
export const loginFn = function(option){
  return http.post('/user/login',option).then(data=>{
    // console.log(data)
    if(data.code !=0){
      message.error('用户名密码错误');
      return;
    }
    return data
  })
}

export const logout = function(){
  return http.get('/user/signout').then(data=>{
    if(data.code !=0){
      message.error('退出失败');
    }
    return data
  })
}