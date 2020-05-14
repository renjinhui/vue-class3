import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import countReducer from './reducers/countReducer'
import permission from './reducers/permission'
const rootReducers = combineReducers({
  countReducer,permission
}) 

let store = createStore(rootReducers,applyMiddleware(reduxThunk))

export default store;