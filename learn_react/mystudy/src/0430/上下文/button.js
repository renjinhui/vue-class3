import React from 'react';
import proptypes from 'prop-types'
class App extends React.Component {
    constructor() {
        super();
        
    }
    static contextTypes = {
      theme: proptypes.string,
      qqq:proptypes.number
    }
    render() {
      console.log(this)
        return <div className={this.context.theme}>
            <button>{this.props.children}</button>
        </div>;
    }
}

export default App