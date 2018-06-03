import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import counterReducer from './counter.js';
import articles from './articles.js';
import comments from './comments.js';
import filters from './filters.js';

export default combineReducers({
    count: counterReducer,
    articles,
    comments,
    filters,
    router: routerReducer
})