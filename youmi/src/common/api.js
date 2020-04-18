import http from './http'
export function getBanner(){
  // 请求 轮播图数据
  return http.get('/api/banner')
}

export function getNavs123(){
  return http.get('/api/navs',{params:{qqq:123,www:345}})
  //  params 是axios规定的传参的属性名
}

export function getGoodsList(type){
  return http.get('/api/goods',{params:{goodsType:type}})
}

// 登录
export function loginFn(data){
  return http.post('/api/login',data)
}

export function getGoodsInfo(goodsId){
  return http.get('/api/goodsInfo',{params:{goodsId}})
}