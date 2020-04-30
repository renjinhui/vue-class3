import {createStore} from 'redux'

/* 
  createStore  接受的第一个参数 是一个reducer(纯函数)

*/
function count(state,action){
  state = state || {count:100,qqq:123456};
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count:state.count + (action.myval || 1)
      }
    case 'minus':
      return {
        ...state,
        count:state.count - (action.myval || 1)
      }
  
    default:
      return {
        ...state
      }
  }
}

let store =createStore(count);


export default store;