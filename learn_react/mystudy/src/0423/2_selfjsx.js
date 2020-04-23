class Element{
  constructor(type,prop,children){
    // 把这些私有变量 存储到实例上 方便后边的函数调用
    this.type = type;
    this.prop = prop;
    this.children = children;
  }
  fn(str){
    return str.replace(/[A-Z]/g,function(a){
      return '-'+a.toLowerCase();
    })
  }
  render(){
    let ele = document.createElement(this.type);
    //把prop中的行内属性 放到这标签上
    for(let k in this.prop){
      if(this.prop.hasOwnProperty(k)){
        // k 若是 className -> class
        //         htmlFor  ->  for
        //         style
        // ele.setAttribute(k,this.prop[k])
        switch (k) {
          case 'className':
            ele.setAttribute('class',this.prop[k])
            break;
          case 'htmlFor':
            ele.setAttribute('for',this.prop[k])
            break;
          case 'style':
            // this.prop[k] 是一个对象；我们需要把对象拼接成字符串
            let str = '';
            Object.keys(this.prop[k]).forEach(key=>{
              // key 有可能是驼峰命名的属性 需要我们转成 -
              str += `${this.fn(key)}:${this.prop[k][key]};`
            })
            ele.setAttribute(k,str);
            break;
          default:
            ele.setAttribute(k,this.prop[k])
            break;
        }
      }
    }
    this.children.forEach(item=>{
      // item 有可能是字符串  还有可能是Element的实例
      // 若是字符串 我们需要使用 createTextNode(字符串) 转成节点
      // 若是Element实例 我们需要使用  实例.render() 的返回结果
      item  instanceof Element ? 
      ele.appendChild(item.render()):
      ele.appendChild(document.createTextNode(item));
      // ele.appendChild(item);
    })
    return ele;
  }
}








let React = {
  createElement(type,prop,...children){
    // let children = [].slice.call(arguments,2)
    // type 对应的是标签名
    // prop 对应的是行内属性
    // 第三个参数及以后 都是当前标签的子节点 我们用一个数组抱起来
    return new Element(type,prop,children);
  }
}
let ReactDOM = {
  render(ele,container){
    // ele 是 Element的实例
    container.appendChild(ele.render())
  }
}


let ele = React.createElement('h1',{className:'qqq',style:{color:'red',fontSize:'18px'}},"珠峰培训",React.createElement('span',{},"23523424"))

ReactDOM.render(ele,document.querySelector('#root'));