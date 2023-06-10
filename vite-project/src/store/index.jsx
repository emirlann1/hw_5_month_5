import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from './counterReducer'
import todoReducer from './todoReducer'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    todos: todoReducer,
    counter: counterReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store