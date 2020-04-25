import React from 'react'
import ReactDOM from "react-dom";

class Button extends React.Component{
  render(){
    console.log(this.props)
    let {children,onClick} = this.props; 
    return <div>
      <button onClick={onClick}>{children}</button>
    </div>
  }
}
class Parent extends React.Component{
  state = {
    age:100,
  }
  myc(n){
    this.setState({
      age:n
    })
  }
  add(){
    this.setState(
      {age:this.state.age+1}
    )
  }
  minus(){
    this.setState(
      {age:this.state.age-1}
    )
  }
  render(){
    let {age} = this.state;
    return <>
      <h1>珠峰培训哈哈哈{age}</h1>
      <Button onClick={()=>{this.add()}}>+</Button>
      <Button>我的<i>+</i></Button>
      <Button onClick={()=>{this.minus()}}>-</Button>
    </>
  }
}



ReactDOM.render(<><Parent/></>,document.getElementById('root'));