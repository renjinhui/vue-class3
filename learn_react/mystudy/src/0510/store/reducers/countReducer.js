/* export function count(state={
  count:100
},action){
  
} */

let initState = {
  count:100
}
export function countReducer(state=initState,action){
  switch (action.type) {
    case 'add':
      // 复杂的业务逻辑
      let c = (state.count + action.num)*100
      return {
        ...state,
        count:c
      }
    case 'minus':
      return {
        ...state,
        count:state.count - action.num
      }
    default:
      return {
        ...state
      }
  }
}
/* export function count(state,action){
  state = state || initState;
} */