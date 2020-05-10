import React from 'react';
// import {connect} from 'react-redux'
import {connect} from './myreact-redux'
class Button extends React.Component {
    constructor() {
        super();
        
    }
    add = ()=>{
      this.props.dispatch({type:'add',num:10})
    }
    minus = ()=>{
      this.props.dispatch({type:'minus',num:5})
    }
    render() {
        return <div className=''>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
        </div>;
    }
}
Button = connect((state)=>{
  return {}
},(dispatch)=>{
  return {
    dispatch
  }
})(Button)
export default Button