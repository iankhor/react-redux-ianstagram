// this is created to collect all reducers into a single file
// and exported to store.js

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import post from './posts'
import comments from './comments'

const rootReducer = combineReducers({
    post, 
    comments,
    routing: routerReducer
})

export default rootReducer