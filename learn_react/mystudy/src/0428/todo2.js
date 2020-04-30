import React from 'react';
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'
import Input from './todo2/input'
import List from './todo2/list'


class App extends React.Component {
    state = {
      todo:'',
      todoAry:[]
    }
    static childContextTypes = {
      count: propTypes.number
    }
    getChildContext(){
      return {
        count:100
      }
    }
    change(e){
      console.log(this)
      this.setState({
        todo:e.target.value
      })
    }
    submit(e){
      console.log(e);
      this.setState({
        todoAry:this.state.todoAry.concat(this.state.todo),
        todo:''
      })
    }
    del(item,index){
      console.log(item,index)
      this.setState({
        todoAry:this.state.todoAry.filter(v=>v!==item)
      })
    }
    render() {
        let {todo,todoAry} = this.state;
        return <div>
          <Input 
            value={todo} 
            onChange={(e)=>{this.change(e)}}
            onSubmit = {(e)=>{this.submit(e)}} 
            />
          <List data={todoAry} onDelete={(item,index)=>{this.del(item,index)}}/>
        </div>;
    }
}


ReactDOM.render(<App></App>,document.querySelector('#root'))