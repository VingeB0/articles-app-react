import {combineReducers} from 'redux';
import counterReducer from './counter.js';

export default combineReducers({
    count: counterReducer
})