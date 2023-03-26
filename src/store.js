import { createStore , combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {quotelistreducer} from './reducers/quotereducer'


const reducers = combineReducers({
   quoteReducer:quotelistreducer
})
const middleware = [thunk]
// store creation

const store = createStore(reducers,applyMiddleware(...middleware))

export default store