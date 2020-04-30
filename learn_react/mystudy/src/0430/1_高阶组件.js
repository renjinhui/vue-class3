import React from 'react';
import ReactDOM from 'react-dom'

class A extends React.PureComponent{
  state = {
    name:6666
  }
  render(){
    return <div>
      <h1>{this.props.name||this.state.name}</h1>
    </div>
  }
}

class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        console.log(this.props)
        let {className,name} = this.props;
        return <div className={className}>
            <h2>{name}</h2>
            <A  name="666"/>
        </div>;
    }
}

// 高阶组件
function connect(Com){
  class TEMP extends React.PureComponent{
    // PureComponent 默认实现了 shoudComponentUpdate(){}
    state = {
      name:"珠峰"
    }
    render(){
      // let {name} = this.state;
      let name = this.props.name || this.state.name;
      return <>
        <Com className='mytemp' name={name}/>
      </>
    }
  }
  return TEMP
}

App = connect(App)// 用connect的返回值 把原来的 App变量对应的值 给顶替了；
A = connect(A);

ReactDOM.render(<App></App>,document.querySelector('#root'))

/* 
  状态提升 ：就是把组件的 state 提升到父组件   然后通过 props的方式传递子组件
  纯组件 组件没有自己的状态 所有的变量 都是父组件传递的；

*/