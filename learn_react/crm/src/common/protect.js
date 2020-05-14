import React from 'react'
import {Route,Redirect} from 'react-router-dom'

function Protect({component:Com,permission,...others}) {
  // 是一个自己封装的高阶组件  这个组件是用来控制传进来的组件是否能够展示的；
  // 使用 查看当前用户的权限中 有没有 这个组件的查看权限  有的话 就正常展示组件 没有就跳到404；
  let allPer = localStorage.getItem('crmPower')||'';
  allPer = allPer.split('|');
  return <Route {...others} render={(props)=>{
    if(allPer.some(item=>item==permission)){
        return <Com {...props}></Com>
    }else{
      return <Redirect to='/404' />
    }
  }}></Route>
}
export default Protect