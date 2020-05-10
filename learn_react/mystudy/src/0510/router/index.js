import React from 'react';
import ReactDOM from 'react-dom'
import {HashRouter,Route,Link,NavLink,BrowserRouter,Redirect,Switch} from 'react-router-dom'
// HashRouter 类似于 vue的hash模式
// BrowserRouter 类似于 history模式
// Route 这个组件 类似于vue的 router-view
// Link 类似于 vue的router-link
// Switch 作用就是 当上边有路由匹配上之后 下边的内容就不会再去查看

let Home = () => <h1>home</h1>
let User = () => <h2>user</h2>

class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
          <Link to='/home'>首页</Link>
          <Link to='/user'>用户</Link>
          <NavLink to='/home'>首页</NavLink>
          <NavLink to='/user'>用户</NavLink>
          <Switch>
            <Redirect path='/' exact to='/home'></Redirect>
            <Route path='/home' component={Home}/>
            <Route path='/user' component={User}/>
            <Route path='/*' component={()=>{return <h2>404</h2>}}></Route>
          </Switch>
        </div>;
    }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>,document.querySelector('#root'))