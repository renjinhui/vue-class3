import React from 'react';
class Input extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        let {value,onChange,onSubmit} = this.props;
        return <div className=''>
            <input 
              type="text" value={value} 
              onKeyDown = {(e)=>{e.keyCode==13 && onSubmit(e)}}
              onChange={onChange}/>
        </div>;
    }
}

export default Input