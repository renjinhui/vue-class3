import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {getDepInfo} from '../../api/home'
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};
// 以上两个对象是控制样式的
class AddDep extends React.Component {
    constructor() {
        super();
        this.state={
            name:'',
            desc:'',
            isRequired:true
        }
    }
    componentDidMount(){
        // 判断地址栏中有没有ID  有ID证明是 编辑  没有证明是新增
        console.log(this.props)
        let ary = this.props.location.search.match(/id=(\w+)/);
        let id = ary && ary[1];
        if(!id)return;// 证明是新增
        // 若是编辑 则需要 用这个ID 从后台要数据
        getDepInfo({departmentId:id}).then(data=>{
            console.log(data);
            this.setState({
                name:data.data.name,
                desc:data.data.desc
            })
            this.form.setFieldsValue({
                name:data.data.name,
                desc:data.data.desc
            })
        })

    }
    onFinish = (values) => {
        console.log(values)
    }
    onFinishFailed = (error) => {
        console.log(error)
    }
    change = (e)=>{
        console.log(e.target.checked)
        this.setState({
            isRequired:e.target.checked
        })
    }
    render() {
        return <div className=''>
            <Form
                ref={(el)=>{this.form=el}}
                {...layout}
                name="basic"
                initialValues={{
                    name:this.state.name,
                    desc:this.state.desc,
                    qqq:true
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="部门名称"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* <Form.Item
                    label="部门描述"
                    name="psw"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator: (_, value) =>{
                                console.log(_,value)
                                // 自定义规则  密码中必须有数字
                                return /\d/.test(value) ? Promise.resolve() : Promise.reject("密码中必须包含数字")
                            }
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item> */}


                <Form.Item
                    label="部门描述"
                    name="desc"
                    rules={[
                        {
                            required: this.state.isRequired,
                            message: 'Please input your password!',
                        },
                        // {
                        //     validator: (_, value) =>{
                        //         console.log(_,value)
                        //         // 自定义规则  密码中必须有数字
                        //         return /\d/.test(value) ? Promise.resolve() : Promise.reject("密码中必须包含数字")
                        //     }
                        // },
                    ]}
                >
                    <Input.TextArea  />
                </Form.Item>

                <Form.Item {...tailLayout} name="qqq" valuePropName="checked">
                    <Checkbox onChange={this.change}>部门是否必填？</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>

                {/* <Form.Item>
                    {
                        getFieldDecorator('psw', {
                            initialValue: '6666',
                            rules: [{required: true,message: 'Please input your password!'}]
                        })(<Input placeholder='密码' />)
                    }
                </Form.Item> */}
            </Form>
        </div>;
    }
}

// AddDep = Form.create({name:"qqqq"})(AddDep)
export default AddDep