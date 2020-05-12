import React from 'react';
import {Link} from 'react-router-dom'
class MyHeader extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className='header_box'>
            <div className="logo">CRM管理系统</div>
            <nav>
                <Link to='/home/org'>组织结构</Link>
                <Link to='/home/crm'>客户管理</Link>
            </nav>
            <div className="right">
              您好
              <span>安全退出</span>
            </div>
        </div>;
    }
}

export default MyHeader