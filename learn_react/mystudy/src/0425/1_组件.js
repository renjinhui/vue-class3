import React,{Component} from 'react';
import ReactDOM from 'react-dom'
function FnApp(props) {
  console.log(props)
  // props.className = 'qqqq';//不能在子组件中修改传进来的数据；
  let {className,style} = props;
  // let className = props.className;
  className = 'qqq';//这个className 只是 这个函数的私有变量；
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
    render() {
      var ary = [1,2,3,4];
        return <div className='box'>
            <ul>{
              ary.map(item=><li key={item}>{item}</li>)
            }</ul>
        </div>;
    }
}

class App2 extends Component{
  // constructor(props){
  //   super();// class 规定的；写继承的时候 写了constructor 就必写 super
  //   console.log(props)
  // }
  render(){
    // this 就是 class 对应的这个实例
    console.log(this.props)
    let {className,style} = this.props;
    return <>
      <h1 className={className}>珠峰</h1>
      <h2>666</h2>
    </>
  }
}

//  在 react组件中 也是只能有一个根元素； 但是这个根元素可以是空标签；
ReactDOM.render(<>
<App></App>
<FnApp className='box123' style={{color:"red",fontSize:'18px'}}/>
<App2 className='box123' style='color:red;font-size:18px'></App2>
</>,document.querySelector('#root'))

