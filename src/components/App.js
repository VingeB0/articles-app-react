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
import {BrowserRouter, Router, Route, Link, NavLink, HashRouter, Switch, Redirect} from 'react-router-dom'
import history from '../history'
import {ConnectedRouter} from 'react-router-redux'
import Counter from './Counter.js'

class App extends Component {

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.username
        }
    }

    state = {
        username: ''
    }

    handleUserChange = (username) => this.setState({ username })

    render() {
        return (
            <ConnectedRouter history = {history}>
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
                        <div>
                            <NavLink activeStyle={{color: 'red'}} to="/comments/1">Comments pagination</NavLink>
                        </div>
                    </div>
                    <UserForm value = {this.state.username} onChange = {this.handleUserChange}/>
                    <Switch>
                        <Route path ="/counter" component = {Counter}/>
                        <Route path ="/filters" component = {Filters}/>
                        <Route path ="/articles/new" component = {NewArticle}/>
                        <Route path ="/articles" component = {Articles}/>
                        {/*<Route path ="/comments/:page" component = {CommentsPage}/>*/}
                        <Route path ="/comments/" component = {CommentsPage}/>
                        <Redirect from = '/comments/' to = '/comments/1' />
                        <Route path ="*" component = {NotFound}/>
                    </Switch>
                    {/*<ArticleList openItemId={this.props.articles[0].id} />*/}
                    {/*<ArticleChart articles={ this.props.articles } />*/}
                </div>
            </ConnectedRouter>
        );
    }
}

export default App;
