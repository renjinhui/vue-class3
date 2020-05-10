export let createStore = function(reducer){
  let state;
  let listener = [];// 用来存放 回调函数
  // let getState = ()=>state
  let getState = function(){
    return JSON.parse(JSON.stringify(state))
  }
  let dispatch = function(action){
    // action 就是  {type:'minus',num:100}
    state = reducer(state,action)// reducer执行的结果是更新之后的state;把更新之后的state给了当前私有的state
    // 数据更新完成之后  再去执行 数组中的回调函数
    listener.forEach(item=>item())
  }
  let subscribe = function(f){
    listener.push(f);
  }
  dispatch({});// 让当前私有作用域的state变成 reducer中设置的那个默认的state;
  return {
    getState:getState,
    dispatch,
    subscribe
  }
}
// export {
//   createStore
// }

export const combineReducers = function(obj){
  //combineReducers 接受的是一个对象
  // obj 中存储的是各个reducer
  
  return function(state={},action){
    // 这个函数就是我们的rootReducer
    for(let reducer in obj){
      // 给state设置对应的属性
      // 属性名是 obj对应的属性名 也就是我们的 countReducer和colorReducer这两个字符
      // 属性值 需要是每一个reducer对应的 state
      // 怎么实现呢？ 让对应的reducer执行即可
      // 执行的时候 传递的state需要时大State中的对应reducer的属性名对应的属性值
      // debugger
      state[reducer] = obj[reducer](state[reducer],action)
    }
    return state
    // {countReducer:{count:100},colorReducer:{color:'red'}}
  }
}

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

export let applyMiddleWare = function(middleWare){
  //使用中间件 middleWare ===》 logger
  return function (createStore) {
    return function(reducer){
      let store = createStore(reducer);
      let middle = middleWare(store);
      let tempDispatch = middle(store.dispatch)
      return {
        ...store,// getState dispatch  subscribe
        // 用新的dispatch 把旧的dispatch覆盖了；
        dispatch:tempDispatch
      }
    }
  }
}
