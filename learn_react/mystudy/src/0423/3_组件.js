import React from 'react'
import ReactDOM from 'react-dom'
/* 
  react组件都是 函数
  组件名首字母必须大写
  细分 就是function(函数式组件) 和 class(类组件)
  组件也是只能有一个根元素（可以是空标签）；

*/
function Com(props){
  console.log(props)
  let {className,til} = props;
  let str = '珠峰培训';
  return (<><div className={className} til={til}>
    <h2>{str}</h2>
  </div><span></span></>)
}

// 把组件行内属性打包成对象传给组件函数
ReactDOM.render(<Com className='qqq' til='666' a={[1,2,3,4,5]}/>,document.querySelector('#root'))
