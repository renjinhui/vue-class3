import React from 'react';
import { connect } from 'react-redux'
import { Layout } from 'antd';
import { Menu,Breadcrumb} from 'antd';
// import {Icon} from '@ant-design/icons'
import {Link,Route } from 'react-router-dom' 
import DepList from './list'
import AddDep from './add'
import Protect from '../../common/protect.js'


const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class ORG extends React.Component {

    state = {
        collapsed: false,
        bread:['部门管理','新增部门']
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    initBread = ()=>{
        // 初始化面包屑  根据当前的路径  "/home/org/department"
        let type = this.props.location.pathname.split('/').pop();//department
        switch (type) {
            case 'department':
                this.state.bread = ['部门管理','部门列表']
                break;
            case 'addDepartment':
                this.state.bread = ['部门管理','新增部门']
                break;
            // 。。。  自己补充 剩下的4个  
            default:
                break;
        }

    }
    render() {
        console.log(this.props)
        this.initBread();
        let permission = this.props.permission || [];
        return <Layout style={{minHeight:'100vh'}}>
            <Sider collapsed={this.state.collapsed}  onCollapse = {this.toggleCollapsed}>
            {/*自己实现 根据当前的路径 自动打开导航 并且默认选中当前路径对应的导航 */}
                <Menu
                    defaultSelectedKeys={[this.state.bread[1]]}
                    defaultOpenKeys={[this.state.bread[0]]}
                    selectedKeys = {[this.state.bread[1]]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        permission.map(item=>{
                            return <SubMenu key={item.title} title={item.title} >
                                {
                                    item.children.map(v=>(
                                        <Menu.Item key={v.til} >
                                            <Link to={v.url} >{v.til}</Link>
                                        </Menu.Item>
                                    ))
                                }
                                
                            </SubMenu>
                        })
                    }
                    
                    
                </Menu>
            </Sider>
            <Content style={{padding:'10px'}}>
                <Breadcrumb>
                    {
                        this.state.bread.map(item=><Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>)
                    }
                    {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
                </Breadcrumb>
                <div>
                    <Protect path='/home/org/department' component={DepList} permission='departhandle'></Protect>
                    {/* <Route path='/home/org/department' component={DepList}></Route> */}
                    <Route path='/home/org/addDepartment' component={AddDep}></Route>
                </div>
            </Content>
        </Layout>
    }
}
ORG = connect((state) => {
    return {
        permission: state.permission
    }
}, (dispatch) => {
    return {
        dispatch
    }
})(ORG)
export default ORG