import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import memoReducer from './reducers/memo'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    memo: memoReducer
})

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
