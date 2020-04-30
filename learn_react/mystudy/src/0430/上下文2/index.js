import React from 'react';
import ReactDOM from 'react-dom'
// import proptypes from 'prop-types'// 使用限制传递参数的类型或者赋予默认值的
import  MyContext from './context'
import  H1 from './h1'
/* 
  新版 context
  首先使用 Qqq = React.createContext() 创造一个上下文
  在父组件的外层 使用  Qqq.Provider组件抱起来
  <Qqq.Provider value= {传给子组件的数据}>父组件</Qqq.Provider>

  后代组件 需要编写
  static contextType = Qqq;
  这样 后代组件 就可以通过 this.context 获取 父组件的数据了

*/
class App extends React.Component {
  
    constructor() {
        super();
        
    }
    render() {
      // 
        console.log(this)
        return <div className='' >
          <H1 theme={this.props.theme}/>
        </div>;
    }
}

ReactDOM.render(<MyContext.Provider value={{
  theme:'dark',
  qqq:100
}}>
   <App></App>
</MyContext.Provider>,document.querySelector('#root'))
