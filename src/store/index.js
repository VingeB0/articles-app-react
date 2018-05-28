import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers'

import logger from '../middlewares/logger.js'
import randomId from "../middlewares/randomId.js";
import api from "../middlewares/api.js";

const enhancer = applyMiddleware(
    randomId,
    api,
    logger
);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
);

window.store = store;

export default store