// import {createStore,combineReducers,applyMiddleware} from 'redux'
import {createStore,combineReducers,applyMiddleware} from './myredux'
import { countReducer } from "./reducers/countReducer";
import { colorReducer } from "./reducers/colorReducer";
import { logger,reduxThunk } from "./middleware";
// import reduxThunk from "redux-thunk";// 这个中间件 可以让dispatch接受函数
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
// let store = applyMiddleware(logger)(createStore)(rootReducer);
let store = createStore(rootReducer,applyMiddleware(reduxThunk,logger));
export default store