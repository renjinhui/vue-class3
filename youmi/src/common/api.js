import http from './http'
export function getBanner(){
  return http.get('/api/banner')
}