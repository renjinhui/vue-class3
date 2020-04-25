import React from 'react'
import '../../less/app.less'
class Model extends React.Component{
  render(){
    let {isShow,onClose,children} = this.props;
    if(!Array.isArray(children)){
      children = [children]
    }
    // children就是数组了
    console.log(children)
    let Header , Main , Footer;
    Header = children.filter(item=>{
      return item.props.qqq === 'header'
    })
    Main = children.filter(item=>{
      return item.props.qqq === 'body'
    })
    Footer = children.filter(item=>{
      return item.props.qqq === 'footer'
    })

    return <>
      {
        isShow?
        <div className="dialog_box">
          <div className="content">
            <header>
              {
                Header.length ? 
                Header:
                '这是头部'
              }
            </header>
            <main>{
              Main.length ?
              Main:
              '这是身体'
            }</main>
            <footer>
              {
                Footer.length ? 
                Footer:
                <><button onClick={onClose}>确定</button>
                <button onClick={onClose}>取消</button></>
              }
            </footer>
          </div>
        </div>
        :null
      }
    </>
  }
}
export default Model