import React from 'react';
import {BrowserRouter,HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Login from './login'
import Home from './home'
import Page404 from './404'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className='app_box'>
            <HashRouter>
              <Switch>
                <Route path='/' exact render={()=>{
                  return <Redirect to='/home'></Redirect>
                }}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='*' render={()=><Page404/>}></Route>
              </Switch>
            </HashRouter>
        </div>;
    }
}

export default App