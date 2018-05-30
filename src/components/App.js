import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList.js";
import Articles from "../routes/Articles.js";
import ArticleChart from "./ArticleChart.js";
import UserForm from "./UserForm.js";
import Filters from './Filters'
import {HashRouter as Router, Route, Link, NavLink} from 'react-router-dom'

import Counter from './Counter.js'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <h4>Main menu</h4>
                        <div>
                            <NavLink activeStyle={{color: 'red'}} to="/counter">Counter</NavLink>
                        </div>
                        <div>
                            <NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink>
                        </div>
                        <div>
                            <NavLink activeStyle={{color: 'red'}} to="/articles">Articles</NavLink>
                        </div>
                    </div>

                    <UserForm/>
                    <Route path ="/counter" component = {Counter}/>
                    <Route path ="/filters" component = {Filters}/>
                    <Route path ="/articles" component = {Articles}/>
                    {/*<ArticleList openItemId={this.props.articles[0].id} />*/}
                    {/*<ArticleChart articles={ this.props.articles } />*/}
                </div>
            </Router>
        );
    }
}

export default App;
