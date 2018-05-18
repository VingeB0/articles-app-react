import {combineReducers} from 'redux';
import counterReducer from './counter.js';
import articles from './articles.js';

export default combineReducers({
    count: counterReducer,
    articles
})