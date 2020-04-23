import React,{Component} from 'react'

import QQQ from '../App'

class MyApp extends Component{
  // constructor(props){
  //   super(props);// 写class继承的时候 若写了constructor 则必写 super();
  //   // 对应的 就是 React.Component 的函数体
  //   // console.log(this.props)
  // }
  render(){
    // render函数名是规定的
    // render函数的返回结果 就是 组件现实的内容
    // this.props中存储的都是传递进来的数据  父传子 传进来的数据；
    console.log(this.props);
    let {className,til} = this.props;
    return <div className={'myapp '+className}>
      珠峰
      <h2>666</h2>
      <QQQ/>
    </div>
  }
}
export default MyApp;
