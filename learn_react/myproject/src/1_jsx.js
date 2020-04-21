import React from 'react'
import ReactDom from 'react-dom'

// js  +  xml 
// jsx DOM只能有一个跟元素
// JSX语法中的变量 都是 用一个 花括号抱起来的；里边可以书写表达式
// 花括号中 不能书写 对象；可以写对象的属性
// 数组可以使用 但是不能包含对象
// react的行内属性的值 也是用 花括号包起来的
// 属性不能有JS关键字 对于类名 我们需要使用className 不能使用 class; 会把之前的类名覆盖
//   for 需要用成 htmlFor
// 行内样式  需要写成一个对象的形势；

let name = '珠峰';
let obj = {a:123,b:345};
let ary = [1,2,3,4];
// let ary2 = [{a:1}];
function fn(str){
    return (<h3>
        你好 函数 {str}
    </h3>)
}

function fn2(n){
    if(n%2==0){
        return <div key={n}>
            你好 偶数 {n}
        </div>
    }else{
        return <div key={n}>
            你好 奇数 {n}
        </div>
    }
}
let styleObj = {
    fontSize:'30px',
    color:'red'
}

let ele = <div className='myjsx' className={1 > 2 ? 'myjsx qqq' : 'myjsx www'} style={styleObj}>
    hello world {name}
    <h2>{obj.a}</h2>
    <h2>{ary}</h2>
    {/* <h2>{ary2}</h2> */}
    <ul>
        {/* 循环ary, 展示的是 ary 中的项 乘 2 */}
        {
            ary.map((item)=>{
                // 只要 标签内部含有变量 我们就需要用 花括号包起来 
                // 跟 vue 类似 ；循环出来的元素 我们都需要一个key
               return <li key={item}>{item*2}</li>
            })
        }
    </ul>
    {fn(1234567)}
    {fn2(6)}
    {
        ary.map(item=>{
            // 循环 ary   返回值 是由 fn2执行的结果组成的 新数组
            return fn2(item)
        })
    }
    <input type="checkbox" name="" id="inp"/>
    <label htmlFor="inp">qweqe</label>
</div>


console.log(ele)// JSX元素就是一个对象
// 热重载 热加载

ReactDom.render(ele,document.querySelector('#root'))