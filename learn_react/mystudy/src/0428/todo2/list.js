import React from 'react';
import Button from './button'
class List extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        let {data=[],onDelete} = this.props;
        return <div className=''>
            <ul>
              {
                data.map((item,index)=><li key={item}>{item} <Button onClick={()=>{onDelete(item,index)}}>自己的文案</Button></li>)
              }
            </ul>
        </div>;
    }
}

export default List