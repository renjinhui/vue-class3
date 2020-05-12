import React from 'react';
import MyHeader from '../components/home/myheader'
import { Layout } from 'antd';
import {Route,Redirect,Switch} from 'react-router-dom'
import '../css/home.css'
import Crm from '../components/crm'
import Org from '../components/org'
const { Header, Footer, Sider, Content } = Layout;
class Home extends React.Component {
    constructor() {
        super();

    }
    render() {
        return <div className='home_box'>
            <Layout>
                <Header>
                    <MyHeader/>
                </Header>
                {/* <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout> */}
                <Switch>
                    <Route path='/home' exact render={()=><Redirect to='/home/org'></Redirect>}></Route>
                    <Route path='/home/org' component={Org}></Route>
                    <Route path='/home/crm' component={Crm}></Route>
                </Switch>
                <Footer>Footer</Footer>
            </Layout>
        </div>;
    }
}

export default Home