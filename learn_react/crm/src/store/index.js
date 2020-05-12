import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import countReducer from './reducers/countReducer'
const rootReducers = combineReducers({
  countReducer
}) 

let store = createStore(rootReducers,applyMiddleware(reduxThunk))

export default store;