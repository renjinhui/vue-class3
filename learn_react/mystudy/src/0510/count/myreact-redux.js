// 提供了 Provider组件  connet方法
import React from 'react';
import propTypes from 'prop-types';
class Provider extends React.PureComponent{
  static childContextTypes = {
    // context中的store属性的类型必须是对象
    store:propTypes.object
  }
  getChildContext(){
    return {
      store:this.props.store
    }
  }
  // 以上这两步 确定了 后代组件可以通过 context属性调用到 store；
  render(){
    return <>{this.props.children}</>
    // return this.props.children
  }
  // Provider组件 实现了什么功能？
  // 创造了context属性 让他的后代 都可以通过 context访问到 store属性；
}
const connect = function(mapStateToProps,mapDispatchToProps){
  //mapStateToProps 用它来 把 state转成 props
  //mapDispatchToProps 用它来 把 dispatch转成props;
  return function(Component){
    return class Temp extends React.PureComponent{
      // 使用这个临时组件 去接受 context中的store
      static contextTypes = {
        store:propTypes.object
      }
      // 这一步写完成之后， Temp这个临时组件就可以 通过this.context.store调用到store这个属性
      constructor(props,context){
        super(props)
        // 就是把 context中的store转成私有的state
        // this.state = context.store.getState();//把整个store中的state转成私有的state
        this.state = mapStateToProps(context.store.getState())
      }
      componentDidMount(){
        this.f = this.context.store.subscribe(()=>{
          this.setState(mapStateToProps(this.context.store.getState()))
        })
      }
      componentWillUnmount(){
        this.f();
      }
      render(){
        return <Component 
          {...this.state} 
          {...mapDispatchToProps(this.context.store.dispatch)}></Component>
      }
    }
  } 
}

export {Provider,connect}