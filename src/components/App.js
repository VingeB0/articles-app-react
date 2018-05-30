import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList.js";
import ArticleChart from "./ArticleChart.js";
import UserForm from "./UserForm.js";
import Filters from './Filters'
import {HashRouter as Router, Route} from 'react-router-dom'

import Counter from './Counter.js'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Router>
                <div>
                    <UserForm/>
                    <Route path ="/counter" component = "{Counter}"/>
                    <Route path ="/filters" component = "{Filters}"/>
                    <Route path ="/articles" component = "{ArticleList}"/>
                    <ArticleList/>
                    {/*<ArticleList openItemId={this.props.articles[0].id} />*/}
                    {/*<ArticleChart articles={ this.props.articles } />*/}
                </div>
            </Router>
        );
    }
}

export default App;
