import React from 'react';
import ReactDOM from 'react-dom'


class App extends React.Component {
    constructor(props){
      super(props);
      // 第一个钩子函数
    }
    // static getDerivedStateFromProps(props,state){
    //   // 两个固定参数 props就是从父组件结果来的数据  state 就是当前组件的私有数据
    //   // 会把返回值 合并到 state中
    //   // 该钩子函数主要目的就是为了 把props转成state
    //   // 不常用
    //   return {
    //     ...props
    //   }
    // }
    render() {
        return <div className=''>
          
        </div>;
    }
    /* componentWillMount(){
        将要被废弃  不能跟  static getDerivedStateFromProps共存
    } */
    componentDidMount(){
      // 类似于 VUE mounted  DOM加载完成；
      // 一般用来做一些DOM操作或者 ajax请求
    }

    componentWillReceiveProps(newProps){
      // 后期 将要被废弃
      // 初始化的时候 不会执行该函数
      // 只有当 父组件传进来的props更新的时候才会触发这个钩子
    }
    shouldComponentUpdate(nextProps,nextState){
      let bol = false;
      Object.keys(nextProps).forEach(item=>{
        nextProps[item] !== this.props[item] && (bol = true) //: null;
      })
      Object.keys(nextState).forEach(item=>{
        nextState[item] !== this.state[item] && (bol = true)// : null;
      })
      let q;
       1 > 2 ? q = 3 : null;
      // let q = 1 > 2 ? 4 : null;
      // 该函数 会在 props更新或者 state更新的时候触发
      // 父组件更新的时候 子组件的 该函数 也会执行
      // 若该函数返回值是false 那么这次更新时 就不会执行 当前组件 的render函数；
      // 若该函数返回值是true 那么这次更新时 就会执行 当前组件 的render函数；
      // 可以用来组件的性能
      return bol;
    }
    componentWillUpdate(){
      // 组件更新之前 类似于 VUE的 beforeUpdate
    }
    componentDidUpdate(){
      // 类似于 VUE的 updated;
    }
    componentWillUnmount(){
      // 类似于  VUE的 beforeDestroy
    }
    /* 
      componentDidMount  shouldComponentUpdate  componentDidUpdate componentWillUnmount
    */
}

class APP2 extends React.PureComponent{
  // 相当于默认进行了shouldComponentUpdate 的判断；
}


ReactDOM.render(<App></App>,document.querySelector('#root'))