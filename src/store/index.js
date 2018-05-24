import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers'

import logger from '../middlewares/logger.js'
import randomId from "../middlewares/randomId";

const enhancer = applyMiddleware(
    randomId,
    logger
);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
);

window.store = store;

export default store