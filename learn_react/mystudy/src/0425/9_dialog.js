import React from 'react'
import ReactDOM from "react-dom";
import Model from './components/model'

class Button extends React.Component{
  render(){
    let {children,onClick} = this.props; 
    return <div>
      <button onClick={onClick}>{children}</button>
    </div>
  }
}

class Parent extends React.Component{
  state = {
    age:100,
    isShow:true
  }
  hide=()=>{
    this.setState({
      isShow:false
    })
  }
  render(){
    let {age,isShow} = this.state;
    return <>
      <h1>珠峰培训哈哈哈{age}</h1>
      <Button onClick={()=>{this.setState({isShow:true})}}>显示</Button>
      <Model isShow={isShow} onClose={this.hide}>
        <div qqq='footer'>这是我自己自己定义的尾部</div>
      </Model>
    </>
  }
}



ReactDOM.render(<><Parent/></>,document.getElementById('root'));