import React from 'react';
import Button from './button' 
class List extends React.Component{
  render(){
    let {list=[],onDelete} = this.props;
    return <ul>
      {/* <li>要做的事情 <Button>删除</Button></li> */}
      {
        list.map((item,index)=><li key={index}>{item} <Button onClick={()=>{
          onDelete(item,index)
        }}>删除</Button></li>)
      }
    </ul>
  }
}

export default List