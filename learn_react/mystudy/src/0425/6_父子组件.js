import React from 'react'
import ReactDOM from "react-dom";

/* 
  若是用在 原生html标签的事件 都是react规定好的事件 on驼峰事件名
  若使用在 组件身上的事件 都是自定义事件
*/
class Button extends React.Component{
  render(){
    let {onClick,n} = this.props;
    console.log(onClick)
    return <div>
      <button onClick={()=>{onClick(n+1)}}>+</button>
      <button onClick={()=>{onClick(n-1)}}>-</button>
    </div>
  }
}

class Child extends React.Component{
  state = {
    name:"珠峰"
  }
  change(){
    this.props.mychange(600);
  }
  render(){
    console.log(this.props)
    let {name} = this.state;
    let { mychange,qqq } = this.props;
    return <div>
      <h1>{name}</h1>
      <h2>{qqq}</h2>
      <button onClick={()=>{this.change()}}>按钮</button>
      {/* <button onClick={()=>{mychange(qqq+1)}}>+</button>
      <button onClick={()=>{mychange(qqq-1)}}>-</button> */}
      <Button onClick={mychange} n={qqq}/>
    </div>
  }
}

class Parent extends React.Component{
  state = {
    age:100,
  }
  myc(n){
    console.log(n)
    console.log(this)
    this.setState({
      age:n
    })
  }
  render(){
    let {age} = this.state;
    return <>
      <h1>珠峰培训哈哈哈</h1>
      <Child qqq={age} mychange={(n)=>{this.myc(n)}}/>
      {/* <Child qqq={age} mychange={this.myc}/> */}
    </>
  }
}











ReactDOM.render(<><Parent/></>,document.getElementById('root'));