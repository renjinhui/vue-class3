import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class ORG extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return<Layout>
              <Sider>Sider</Sider>
              <Content> ORG 的 Content</Content>
          </Layout>
    }
}

export default ORG