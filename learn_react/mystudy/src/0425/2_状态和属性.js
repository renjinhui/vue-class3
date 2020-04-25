import React,{Component} from 'react';
import ReactDOM from 'react-dom'

// props 中存储的都是 传进来的数据  相当于 vue组件中的props
// react组件中 有两大数据源  属性props  状态state
// state 存储的是当前组件的私有数据 相当于 vue组件中的data
function FnApp(props) {
  console.log(props)
  let {className,style} = props;
  className = 'qqq';
  var ary = [1,2,3,4];
  return <div className={'box '+props.className} style={style}>
    <ul className={className}>
      {
        ary.map(item=><li key={item}>{item}</li>)
      }
    </ul>
  </div>
}

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        name:"珠峰"
      }
    }
    render() {
      var ary = [1,2,3,4];
      // this 就是当前的实例
      let {name} = this.state;
      return <div className='box'>
          <h1>{this.state.name}</h1>
          <h2>{name}</h2>
          <ul>{
            ary.map(item=><li key={item}>{item}</li>)
          }</ul>
      </div>;
    }
}


//  在 react组件中 也是只能有一个根元素； 但是这个根元素可以是空标签；
ReactDOM.render(<>
<App></App>
<FnApp className='box123' style={{color:"red",fontSize:'18px'}}/>
</>,document.querySelector('#root'))

