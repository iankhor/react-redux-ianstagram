import { createStore , compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

//import root reducer
import rootReducer from './reducers/index'

import comments from './data/comments'
import post from './data/posts'

const defaultState = {
    post,
    comments
}

export default const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)