import React from 'react';
import ReactDOM from 'react-dom'
import store from './store'
console.log(store.getState())
// store中 getState 获取数据的
//         dispatch 触发readucer函数的 也就是用来修改数据的
//         subscribe 用来向事件池增加事件的；事件池中的函数会在数据更新之后触发
//                   向一个数组中添加回调函数，这里边的回调函数会在数据更新之后挨个触发
class App extends React.Component {
    constructor() {
        super();
        
    }
    add=()=>{
      store.dispatch({type:'add',num:1})
      console.log(store.getState())

    }
    minus=()=>{
      store.dispatch({type:'minus',num:100})
      console.log(store.getState())
    }
    componentDidMount(){
      // 当DOM加载完成之后，我们向redux的事件池数组中添加回调函数(触发视图更新)
      store.subscribe(()=>{
        this.setState({});
      })
    }
    render() {
        return <div className=''>
            {/* <h2 style={{color:store.getState().www.color}}>数字是：{ store.getState().qqq.count}</h2> */}
            <h2 style={{color:store.getState().colorReducer.color}}>数字是：{ store.getState().countReducer.count}</h2>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
        </div>;
    }
}
ReactDOM.render(<>
  <App/>
</>,document.querySelector('#root'),function(){
  // DOM挂在完成之后触发
})
