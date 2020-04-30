import React from 'react';
import ReactDOM from 'react-dom'
import store from './store'

/* import qwer from './list'
import {aaa} from './button'
console.log(qwer,aaa) */

/* 
  redux 用法 
  获取数据 用 getState
  更新数据 用 dispatch({type:,qqq:})
  试图更新 通过 向subscribe添加回调函数 回调函数中触发视图更新

  redux 本身跟react 没关系
  但是当我们把redux应用到react中是 是为了解决组件间的数据交互

  当我们在react中使用redux是 一定会 借助 react-redux这个插件

  react-redux 是把 redux和react链接在一块的一个插件

*/
console.log(store)
console.log(store.getState())
class App extends React.Component {
  
    constructor() {
        super();
        
    }
    add(){
      //store.dispatch(action)
      store.dispatch({type:'add',myval:10})
      console.log(store.getState())
    }
    minus(){
      store.dispatch({type:'minus',myval:5})
      console.log(store.getState())
    }
    componentDidMount(){
      // subscribe 是用来向事件池中添加回调函数的
      // 事件池中的回调函数什么时候执行呢？  当数据更新完成之后 redux会自动执行事件池中的函数；
      store.subscribe(()=>{
        this.setState({})
        console.log(1)
      })
      store.subscribe(()=>{
        // this.setState({})
        console.log(2)
      })
    }
    render() {
        console.log(this)
        return <div className='' >
          <h1>数字是{store.getState().count}</h1>
          <button onClick={()=>{this.add()}}>+</button>
          <button onClick={()=>{this.minus()}}>-</button>
        </div>;
    }
}

ReactDOM.render(<App></App>,document.querySelector('#root'))
