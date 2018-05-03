import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/ArticleList';
import registerServiceWorker from './registerServiceWorker';

import {fixtures} from './fixtures.js'

ReactDOM.render(<App articles={ fixtures }/>, document.getElementById('root'));
registerServiceWorker();
