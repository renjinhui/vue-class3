import React,{useState} from 'react';
import ReactDOM from 'react-dom'
function FnApp(props) {
  let {className,style} = props;
  let [count,changeCount] = useState(100);
  let [name,setName] = useState("珠峰")
  // 相当于 class组件中的 state= {count:100}
  return <div className={'box '+props.className} style={style}>
    <h1>数字是{count}</h1>
    <h2>{name}</h2>
    <button onClick={()=>{changeCount(count+1);setName(666)}}>+</button>
    <button onClick={()=>{changeCount(count-1)}}>-</button>
  </div>
}
class App extends React.Component{
  state = {
    count:100,
    name:"珠峰"
  }
  add(){
    this.setState({
      count:this.state.count+1
    })
  }
  render(){
    let {count} = this.state; 
    return <div>
      <h1>数字是{count}</h1>
    <button onClick={()=>{this.add()}}>+</button>
    <button>-</button>
    </div>
  }
}



//  在 react组件中 也是只能有一个根元素； 但是这个根元素可以是空标签；
ReactDOM.render(<>
<FnApp className='box123' style={{color:"red",fontSize:'18px'}}/>
<App/>
</>,document.querySelector('#root'))

