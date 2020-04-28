import React from 'react';
class Input extends React.Component{
  // submit(code,cb){
  //   if(code==13){
  //     cb()
  //   }
  // }
  render(){
    let {value,mychange,onSubmit} = this.props;
    // function submit(code) {
    //   if(code==13){
    //     onSubmit();
    //   }
    // }
    /* 
      a && a(); 前边成立 才会走后边
    */
    return <div>
      <input type="text" 
        value={value} 
        onChange={(e)=>{mychange(e.target.value)}}
        onKeyDown={(e)=>{e.keyCode==13 && onSubmit()}}   
        />
    </div>
  }
}
export default Input