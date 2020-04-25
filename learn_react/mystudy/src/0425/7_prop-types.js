import React from 'react'
import ReactDOM from "react-dom";
// import Proptypes from 'prop-types';
import qqq from 'prop-types';

/* 
propTypes,defaultProps 这两个词 都是react规定的
propTypes 用来设置规则
defaultProps 用来给默认值；
*/

class Button extends React.Component{
  static propTypes ={
    // 使用设置 props的规则的 
    n:qqq.number.isRequired, // n 必传  而且必须是数字
    onClick:qqq.func
  }
  static defaultProps = {
    onClick:function(){console.log(777)}
  }
  render(){
    let {onClick,n} = this.props;
    return <div>
      <button onClick={()=>{onClick(n+1)}}>+</button>
      <button onClick={()=>{onClick(n-1)}}>-</button>
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
  render(){
    let {age} = this.state;
    return <>
      <h1>珠峰培训哈哈哈{age}</h1>
      <Button n={age} onClick={(n)=>{this.myc(n)}}/>
      <Button n={age}/>
    </>
  }
}



ReactDOM.render(<><Parent/></>,document.getElementById('root'));