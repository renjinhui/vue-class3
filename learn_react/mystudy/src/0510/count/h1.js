import React from 'react';
// import {connect} from 'react-redux'
import {connect} from './myreact-redux'
// 哪个组件需要用到redux中的数据 这个组件就组要使用connect
import MyI from './i'
class H1 extends React.Component {
    constructor() {
        super();
        
    }
    render() {
      console.log(this.props)
        return <div className=''>
          这是一个展示组件
          <MyI/>
          <h1>当前数字是：{this.props.count}</h1>
        </div>;
    }
}
H1 = connect((state)=>{
  return {
    count:state.countReducer.count
  }
},(dispatch)=>{
  return {
    fn:dispatch
  }
})(H1)

export default H1