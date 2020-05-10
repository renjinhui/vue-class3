import React from 'react';
// import {connect} from 'react-redux'
import {connect} from './myreact-redux'
class MyI extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <i className='' style={{color:this.props.color}}>
            这是我的斜体组件
        </i>;
    }
}
MyI = connect((state)=>{
  return {
    color:state.colorReducer.color
  }
},(dispatch)=>{
  return {}
})(MyI)
export default MyI