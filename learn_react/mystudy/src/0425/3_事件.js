import React,{Component} from 'react';
import ReactDOM from 'react-dom'

// props 中存储的都是 传进来的数据  相当于 vue组件中的props
// react组件中 有两大数据源  属性props  状态state
// state 存储的是当前组件的私有数据 相当于 vue组件中的data
// 在react中想让视图更新  必须条用 setState这个方法；
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
    add(ary){
      // 最后一个实参对应的就是我们的 事件对象
      ary.push(100);
      console.log(ary);
      this.setState({})
    }
    minus(){
      console.log(this)
    }
    nothing=(e)=>{
      console.log(this)
    }
    render() {
      var ary = [1,2,3,4];
      console.log(ary)
      // this 就是当前的实例
      let {name} = this.state;
      return <div className='box'>
          <h1>{this.state.name}</h1>
          <h2>{name}</h2>
          <ul>{
            ary.map(item=><li key={item}>{item}</li>)
          }</ul>
          {/* 事件  事件名 = {对应函数体} 函数体一般都是在原型上 */}
          <button onClick={this.add.bind(this,ary)}>添加</button>
          {/* 
              render函数体中的this 就是当前实例； 
              箭头函数中的this 是上级作用域的； 
              函数执行点前边是谁 this就是谁 
          */}
          <button onClick={(e)=>{this.minus(e,6,6,6,1,2,3)}}>删除</button>
          <button onClick={this.nothing}>不变</button>
      </div>;
    }
}


//  在 react组件中 也是只能有一个根元素； 但是这个根元素可以是空标签；
ReactDOM.render(<>
<App></App>
{/* <FnApp className='box123' style={{color:"red",fontSize:'18px'}}/> */}
</>,document.querySelector('#root'))

