import React from 'react';
import ReactDOM from 'react-dom'
import proptypes from 'prop-types'// 使用限制传递参数的类型或者赋予默认值的

import  H1 from './h1'
/* 
  若一个组件的context中有几个属性，那么所有的后代组件  都可以使用这个context中的属性；
  写业务时 不建议使用 ；一般会用在封装某些三方插件时使用

  在父组件中 编写  static  childContextTypes = {
    后代要使用的属性名：对应的类型限制
  }
  还得再写一个 getchildContext方法
  getChildContext(){
    return {
      后代要使用的属性名：对应的值
    }
  }

  后代组件 想要使用上边的属性 需要编写
    static contextType = {
      要使用的属性名：对应的类型限制
    }
*/
class App extends React.Component {
    static childContextTypes = {
      theme: proptypes.string,
      qqq: proptypes.number
    }
    constructor() {
        super();
        
    }
    getChildContext(){
      // 该函数返回的对象 就是 context中的属性
      return {
        theme:this.props.theme,
        qqq:100
      }
    }
    render() {
      // 
        console.log(this)
        return <div className='' >
          <H1 theme={this.props.theme}/>
        </div>;
    }
}

ReactDOM.render(<App theme='dark'></App>,document.querySelector('#root'))
