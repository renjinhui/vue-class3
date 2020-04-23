import React from 'react';
import logo from './logo.svg';
import './App.css';

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

export default App;
