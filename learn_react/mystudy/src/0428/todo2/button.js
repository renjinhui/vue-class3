import React from 'react';
import propTypes from 'prop-types'
class Button extends React.Component {
    static contextTypes = {
        count:propTypes.number
    }
    constructor() {
        super();
        
    }
    render() {
        let {children,onClick} = this.props;
        return <>
          <button onClick={()=>{onClick();console.log(this)}}>{children}</button>
        </>;
    }
}

export default Button