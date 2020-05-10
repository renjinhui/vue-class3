// import {createStore,combineReducers} from 'redux'
import {createStore,combineReducers,applyMiddleWare} from './myredux'
import { countReducer } from "./reducers/countReducer";
import { colorReducer } from "./reducers/colorReducer";
import { logger } from "./myredux";
//combineReducers  用来合并多个reducer的
/* let rootReducer = combineReducers({
  qqq:countReducer,//使用自定义属性名 qqq来存放 countReducer对应的那个初始state{count:100}
  www:colorReducer
}) */
let rootReducer = combineReducers({
  countReducer:countReducer,//使用自定义属性名 qqq来存放 countReducer对应的那个初始state{count:100}
  colorReducer
})
// let store = createStore(rootReducer);// reducer 就是一个纯函数
// let store = createStore(countReducer);// reducer 就是一个纯函数
let store = applyMiddleWare(logger)(createStore)(rootReducer);
export default store