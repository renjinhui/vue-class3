import React from 'react';
import ReactDOM from 'react-dom'
import logo from '../logo.svg';

/* 
{}  可以编写 表达式
行内属性 class -> className   for -> htmlFor 
style 不能编写字符串， style = {对象}
map
三元
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

var ele = <h1>珠峰培训<span>666</span><span>888</span></h1>;
var ele2 = React.createElement('h1',{className:'qqq'},'珠峰培训',
React.createElement('span',{},"666"),React.createElement('span',{},"888"))

ReactDOM.render(<App/>,document.querySelector('#root'))

// ReactDOM.render(ele2,document.querySelector('#root'))