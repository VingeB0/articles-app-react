import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from '../components/ArticleList.js';
import Article from '../components/Article/index.js';
import {Route} from 'react-router-dom';

class Articles extends Component {
    static propTypes = {
    }

    render() {
        return (
            <div>
                <ArticleList/>
                <Route path="/articles/:id" render={this.getArticle}/>
            </div>
        )
    }

    // getArticle = ({match}) => {
    getArticle = (...rest) => {
        console.log('----ARTICLE ROUTE----')
        // console.log(match.params.id)
        console.log(rest)
        return <h1>Article id</h1>
        // return <h1>Article id: {match.params.id}</h1>
    }
}

export default Articles