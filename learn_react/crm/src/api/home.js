import http from './http'
export function getDepList(){
  // 可以做 请求失败的判断
  return http.get('/department/list')
}
export function getDepInfo(data){
  return http.get('/department/info',data)
}