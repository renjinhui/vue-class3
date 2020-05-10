import React from 'react';
import ReactDOM from 'react-dom'
import store from '../store'
// import {Provider} from 'react-redux'
import {Provider} from './myreact-redux'

import H1 from './h1'
import Button from './button'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <H1/>
            ===========================
            <Button/>
        </div>;
    }
}

ReactDOM.render(<Provider store = {store}>
  <App/>
</Provider>,document.querySelector('#root'))