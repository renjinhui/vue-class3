/* let logger = function(store){
  // 用来在控制台输出 新旧数据的
  return function (dispatch) {
    return function(action){
      console.log('老数据：',store.getState())
      dispatch(action)//更新数据
      console.log('新数据：',store.getState())
    }
  }
} */
export let logger = store => dispatch => action => {
  console.log('老数据：',store.getState())
  dispatch(action)//更新数据
  console.log('新数据：',store.getState())
}
export const reduxThunk = store => dispatch => action => {
  if(typeof action == 'function'){
    //若传进来的 action 不再是一个对象 而是一个 函数时；
    // 实际上就是让出了 dispatch的操作权；
    return action(dispatch,store.getState)
  }
  dispatch(action)
}