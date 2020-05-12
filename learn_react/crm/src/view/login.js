import React from 'react';
import { Input,Button } from 'antd';
import { loginFn } from "../api/login";
import '../css/login.css'
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'',
            psw:''
        }
    }
    changeName = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    changePsw = (e)=>{
        this.setState({
            psw:e.target.value
        })
    }
    submit = ()=>{
        console.log(this.state.name,this.state.psw)
        loginFn({
            account:this.state.name,
            password:this.state.psw
        }).then(data=>{
            if(data){
                // 若登录成功  则 把登录返回的权限信息存储到localStoreage中
                localStorage.setItem('crmPower',data.power);
                console.log(this.props)
                this.props.history.push('/home');// 类似于vue this.$router.push('/home')
            }else{
                localStorage.removeItem('crmPower')
            }
        })
    }
    render() {
        let {name,psw} = this.state;
        return <div className='login_box'>
            <div className='middle'>
                <Input placeholder="用户名" value={name} onChange={this.changeName}/>
                <Input.Password placeholder="密码" value={psw} onChange={this.changePsw}/>
                <Button type="primary" onClick={this.submit}>登录</Button>
            </div>
        </div>;
    }
}

export default Login