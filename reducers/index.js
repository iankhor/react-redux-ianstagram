// this is created to collect all reducers into a single file
// and exported to store.js

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    post, 
    comments,
    router: routerReducer
})

export default rootReducer