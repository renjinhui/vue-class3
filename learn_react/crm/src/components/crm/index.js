import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class CRM extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <Layout className='qqq'>
              <Sider>Sider</Sider>
              <Content>CRM 的Content</Content>
          </Layout> 
    }
}

export default CRM