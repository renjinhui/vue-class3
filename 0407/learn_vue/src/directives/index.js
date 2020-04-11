import Vue from 'vue';
Vue.directive('permission',function(el,bindings){
  // el 是 指令所在的哪个 元素；  bindings.value是指令对应的值
  el.style.display = bindings.value < 3 ? 'block' : 'none';
})
Vue.directive('focus',{
  inserted(el,bindings){
    el.focus()
  }
})