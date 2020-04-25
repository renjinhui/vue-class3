import React from 'react';
import ReactDOM from 'react-dom'
import './banner.less'
import BannerList from './bannerList'
class Banner extends React.Component {
    state = {
      list:[1,2,3,4],
      index:0
    }
    move(){
      this.setState({
        index:this.state.index+1
      })
    }
    autoMove(){
      setInterval(() => {
        this.move()
      }, 3000);
    }
    componentDidMount(){
      // 钩子函数 类似于 vue的 mounted
      this.autoMove();
    }
    render() {
        let {list,index} = this.state;
        return <div className='banner_box'>
          <BannerList 
            list={list} 
            index={index} 
            initIndex={(n)=>{this.setState({index:n})}}/>
        </div>;
    }
}

ReactDOM.render(<Banner/>,document.querySelector('#root'));