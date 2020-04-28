import React from 'react';
class Button extends React.Component{
  render(){
    let {children,onClick} = this.props;
    return <button onClick={onClick}>{children}</button>
  }
}

export default Button