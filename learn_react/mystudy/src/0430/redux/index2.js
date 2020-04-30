import React from 'react';
import ReactDOM from 'react-dom'
import store from './store'

import {Provider,connect} from 'react-redux'
//Provider shiyputongzujian
//connect 是一个 高阶组件 接受两层参数 第一层 有两个参数对应两个回调函数
// 第二层 接受一个组件

class App extends React.Component {
  
    constructor() {
        super();
        
    }
    add(){
      this.props.dispatch({type:'add',myval:100})
    }
    minus(){
      this.props.dispatch({type:'minus',myval:100})
    }
    
    render() {
        console.log(this)
        let {count }  = this.props
        return <div className='' >
          <h1>数字是{count}</h1>
          <button onClick={()=>{this.add()}}>+</button>
          <button onClick={()=>{this.minus()}}>-</button>
        </div>;
    }
}

App = connect((state)=>{
  return {
    ...state,
    aaa:100
  }
},(dispatch)=>{
  return {
    dispatch:dispatch
  }
})(App)

ReactDOM.render(<Provider store = {store}>
  <App></App>
</Provider>,document.querySelector('#root'))
