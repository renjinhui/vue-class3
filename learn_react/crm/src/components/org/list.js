import React from 'react';
import { Table, Button, Space,Modal } from 'antd';
import {getDepList} from '../../api/home'

const { confirm } = Modal;
// 控制表头  有几列

class DepList extends React.Component {
    constructor() {
        super();
        
    }
    state = {
      columns : [
        {
          title: '编号',
          dataIndex: 'id',
          key: 'id',
          render: (...arr)=>{
            console.log(arr)
            return <span>{arr[2]+1}</span>
          },
        },
        {
          title: '部门名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '描述',
          dataIndex: 'desc',
          key: 'desc',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button type='primary' onClick={this.emit.bind(this,record)}>编辑</Button>
              <Button type='danger' onClick={this.del.bind(this,record)}>删除</Button>
            </Space>
          ),
        },
      ],
      data :[
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ],
      pageSet:{
        position:'bottom',
        total:50,
        pageSize:5
      }
    }
    emit(record){
      console.log(record)
      this.props.history.push('/home/org/addDepartment?id='+record.id)
    }
    del(record){
      confirm({
        title: '警告！',
        content: '是否确定删除?',
        onOk() {
          console.log('OK',record.id);
          // 调用后台的删除接口  需要给后台ID  在record中有id
          // 后台删除成功之后 前端 把这条数据 从原来的state中删掉即可；
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
    componentDidMount(){
      getDepList().then(data=>{
        console.log(data);
        this.setState({
          data:data.data.map(item=>{
            item.key=item.id;
            return item
          }),
          pageSet:{
            ...this.state.pageSet,
            total:data.data.length
          }
        })
      })
    }
    render() {
        return <div className=''>
            <Table columns={this.state.columns} dataSource={this.state.data} pagination={this.state.pageSet}/>
        </div>;
    }
}

export default DepList