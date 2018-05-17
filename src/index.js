import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {fixtures} from './fixtures.js'

import store from './store'

ReactDOM.render(<App articles={ fixtures }/>, document.getElementById('root'));
registerServiceWorker();
