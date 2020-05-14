let initState = {
  limit:[
    {
      title:"部门管理",
      type:'departhandle',// 用来控制是否有权限展示这个导航 ，ye
      icon:'profile',// 用来管理展示的图标
      children:[
        //控制当前导航下的子导航
        {
          til:"部门列表",
          url:'/home/org/department'
        },
        {
          til:"新增部门",
          url:'/home/org/addDepartment'
        }
      ]
    },
    {
      title:"职务管理",
      type:'jobhandle',
      children:[
        //控制当前导航下的子导航
        {
          til:"职务列表",
          url:'/home/org/job'
        },
        {
          til:"新增职务",
          url:'/home/org/addJob'
        }
      ]
    },
    {
      title:"员工管理",
      type:'userhandle',
      children:[
        //控制当前导航下的子导航
        {
          til:"员工列表",
          url:'/home/org/user'
        },
        {
          til:"新增员工",
          url:'/home/org/addUser'
        }
      ]
    }
  ]
}
function permission(state = initState,action){
  let power = localStorage.getItem('crmPower')||'';
  power = power.split('|'); //[departhandle,jobhandle,departcustomer]

  return state.limit.filter(item=>{
    return power.includes(item.type)
  })
}
export default permission