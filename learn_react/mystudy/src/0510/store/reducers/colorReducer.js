/* export function count(state={
  count:100
},action){
  
} */

let initState = {
  color:'red'
}
export function colorReducer(state=initState,action){
  switch (action.type) {
    case 'changeColor':
      return {
        ...state,
        color:action.color
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