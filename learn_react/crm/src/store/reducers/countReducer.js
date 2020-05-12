import * as types from '../action-types'
// 就是把 action-types 文件中的所有导出 统一放到一个types的对象中；
let initState = {
  count:100
}
const countReducer = function(state=initState,action){
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        count:state.count + action.count
      }
    case types.MINUS:
      return {
        ...state,
        count:state.count - action.count
      }
    default:
      return{
        ...state
      } 
  }
}
export default countReducer