import React from 'react';
import ReactDOM from 'react-dom'

/* 
  非受控组件   表单元素不受组件控制
  受控组件  表单元素的内容 是依赖于本组件的数据的；写了value之后 必须有onChange事件与之对应
*/
class App extends React.Component {
    constructor() {
        super();
        this.state = {
          name:"",
          psw:''
        }
    }
    submit=()=>{
      // console.log(this.nameInp.value,this.psdInp.value)
      console.log(this.state)
      this.setState({
        name:'',
        psw:''
      })
    }
    changeName(e){
      this.setState({
        name:e.target.value
      })
    }
    changePsw(e){
      this.setState({
        psw:e.target.value
      })
    }
    render() {
        let {name,psw} = this.state;
        // console.log(666)
        return <div className=''>
          {/* <input ref={(el)=>{this.nameInp=el}} type="text" placeholder='用户名'/>
          <input ref={(el)=>{this.psdInp=el}} type="password" placeholder='密码'/> */}
          <input type="text" placeholder='用户名' value={name} onChange={(e)=>this.changeName(e)}/>
          <input type="password" placeholder='密码' value={psw} onChange={(e)=>this.changePsw(e)}/>
          <button onClick={this.submit}>提交</button>
        </div>;
    }
}


ReactDOM.render(<App></App>,document.querySelector('#root'))