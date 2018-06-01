import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList.js";
import Articles from "../routes/Articles.js";
import NewArticle from "../routes/NewArticle.js";
import NotFound from "../routes/NotFound.js";
import CommentsPage from "../routes/CommentsPage.js";
import ArticleChart from "./ArticleChart.js";
import UserForm from "./UserForm.js";
import Filters from './Filters'
import {BrowserRouter as Router, Route, Link, NavLink, HashRouter, Switch} from 'react-router-dom'

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
                    <Switch>
                        <Route path ="/counter" component = {Counter}/>
                        <Route path ="/filters" component = {Filters}/>
                        <Route path ="/articles/new" component = {NewArticle}/>
                        <Route path ="/articles" component = {Articles}/>
                        <Route path ="/comments/:page" component = {CommentsPage}/>
                        <Route path ="*" component = {NotFound}/>
                    </Switch>
                    {/*<ArticleList openItemId={this.props.articles[0].id} />*/}
                    {/*<ArticleChart articles={ this.props.articles } />*/}
                </div>
            </Router>
        );
    }
}

export default App;
