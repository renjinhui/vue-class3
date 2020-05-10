# redux
  - createStore  负责产生store store中有getState dispatch  subscribe
  - createStore 接受两个参数 第一个参数是reducer 第二个参数是使用中间件 applyMiddleware()
  - 多个reducer需要使用 combineReducers({}) 这个方法
  - applyMiddleware用来使用中间件的  中间件是在代码执行中间添加自己的代码
    - 它接受三层参数 第一层 是一个 中间件的集合（数组）第二层和第三层分别是 createStore 和reducer
  - compose 使用实现 函数结果的连续传递，也就是 让最后一个函数的结果传递给倒数第二个函数  ，倒数第二个函数的执行结果传递给 倒数第三个 。。。

# redux中间件  
  可以根据自己的业务编写一些中间件， 也可以使用功能性的中间件 像 redux-thunk；
  ```javascript
    export const reduxThunk = store => dispatch => action =>{
      console.log('更新之前的数据：',store.getState())
      dispatch(action)
      console.log('更新之后的数据：',store.getState())
    }
  ```

## 文件中  myredux是redux是redux源码 middleware是自己编写的中间件  store/index是redux的用法 
