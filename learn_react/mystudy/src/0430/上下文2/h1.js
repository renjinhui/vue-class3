import React from 'react';
import Button from './button'
// import proptypes from 'prop-types'
import MyContext from './context'

class App extends React.Component {
    constructor() {
        super();
        
    }
    static contextType = MyContext
    // static contextTypes = {
    //   theme: proptypes.string
    // }
    render() {
      console.log(this)
        return <div className=''>
            <h1>你好 珠峰</h1>
            <Button theme={this.props.theme}>自己的按钮</Button>
        </div>;
    }
}

export default App