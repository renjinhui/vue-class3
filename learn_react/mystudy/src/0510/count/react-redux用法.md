在根组件  使用 Provider组件 把根组件抱起来 给Provider提供一个行内属性 store;
这个store对应的就是 我们的 redux产生的store

若子组件需要使用或者更改redux中的数据  则在该组件中需要使用 connet方法
组件名 = connet(回调函数1，回调函数2)(组件名)  
回调函数1 = function(state){return {qqq:state.colorReducer.color}}
回调函数2 = function(dispatch){return {dispatch}}