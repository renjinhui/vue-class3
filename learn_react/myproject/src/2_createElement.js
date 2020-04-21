import React from 'react';
import ReactDom from 'react-dom';

let ele = <div>
    hello 
    <div id='mydiv'>哈哈</div>
</div>;
// babel  会把 上边的 jsx语法转译成 React.createElement 语法
let ele2 = React.createElement('h1',{id:'q',className:'w'},'哈哈哈',React.createElement('span',null,'呵呵呵'));
// React.createElement('标签名',{行内属性},元素内容,元素内容,...) 
// 从第三个参数开始 及其以后 都是  该标签的内容

// babel 转义完成之后  上边的 ele 就变成了 ele3
let ele3 = React.createElement('div',null,'hello',React.createElement('div',{id:'mydiv'},'哈哈'))

console.log(document.getElementById('mydiv'))
ReactDom.render(ele,document.querySelector('#root'),function(){
    // 当 DOM 渲染到页面之后会触发该函数
    console.log(document.getElementById('mydiv'))
})