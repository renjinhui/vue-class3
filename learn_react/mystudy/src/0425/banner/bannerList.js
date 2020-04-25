import React from 'react';
class BannerList extends React.Component {
    state = {
      list:this.props.list.concat(this.props.list[0])
    }
    render() {
        let {index,initIndex} = this.props; 
        let {list} = this.state;
        console.log(list.length,index)
        
        let sty = {
          width:list.length*600+'px'
        }
        if(index == list.length){
          //说明要露出白板了
          /* transform:`translateX(${-index*600}px)`,
          transition:'all 0.2s' */
          Object.assign(sty,{
            transform:`translateX(0px)`,
            transition:'none'
          })
          // let q = document.querySelector('.ul_box').offsetHeight;
          // initIndex(1);
          setTimeout(() => {
            initIndex(1);
          }, 10);
        }else{
          Object.assign(sty,{
            transform:`translateX(${-index*600}px)`,
            transition:'all 0.2s'
          })
        }
        return <ul className='ul_box' style={sty}>
            {
              list.map((v,i)=>{
                return <li key={i}>
                  内容{v}
                </li>
              })
            }
        </ul>;
    }
}

export default BannerList