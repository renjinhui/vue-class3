import React from 'react'
import ReactDOM from 'react-dom'
/* 
  ref=字符串 这种方式 将来会被废弃
  ref= {(el)=>{this.自定义属性=el}}  通用
  通过ref 我们可以获取元素 也可以获取组件 跟VUE一致；
*/
class Count extends React.Component{
  state = {
    count:1
  }
  fn=(e)=>{
    console.log(this.btn2)
  }
  render(){
    return <div>
      <h2>当前数字是 {this.state.count}</h2>
      <button ref='btn'  onClick={this.fn}>+</button>
      <button ref={(el)=>{this.btn2=el}} >-</button>
    </div>
  }
}
class App extends React.Component{
  fn = ()=>{
    console.log(this.Cn)
  }
  render(){
    return <div>
      <button onClick={this.fn}>按钮</button>
      <Count ref={(el)=>{this.Cn = el}}/>
    </div>
  }
}

ReactDOM.render(<App></App>,document.querySelector('#root'))