import React from 'react';
import ReactDOM from 'react-dom'
import Input from './todo2/input'
import List from './todo2/list'


class App extends React.Component {
    state = {
      todo:'',
      todoList:[],
      str:'box'
    }
    change(t){
      this.setState({
        todo:t
      })
    }
    submit(){
      let str = this.state.todo;
      // if(!str){
      //   alert('null')
      //   return;
      // }
      this.setState({
        todo:'',
        todoList:this.state.todoList.concat(str)
      })
      console.log(this.state.todo)
    }
    delete(item,index){
      console.log(item,index);
      // this.state.todoList.splice(index,1);
      // this.setState({});
      this.setState({
        todoList:this.state.todoList.filter(v=>v!==item)
      })
    }
    render() {
        let {todo,todoList,str} = this.state;
        return <div className={str}>
          <Input 
            value={todo} 
            onSubmit={()=>this.submit()}
            mychange={(t)=>this.change(t)}/>
          <List list={todoList} onDelete={this.delete.bind(this)}/>
        </div>;
    }
}


ReactDOM.render(<App></App>,document.querySelector('#root'))