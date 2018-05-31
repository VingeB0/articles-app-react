import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from '../components/ArticleList.js';
import Article from '../components/Article/index.js';
import {Route} from 'react-router-dom';
import NotFound from "./NotFound";

class Articles extends Component {
    static propTypes = {
    }

    render() {
        return (
            <div>
                <ArticleList/>
                <Route path="/articles" children={this.getIndex} exact />
                <Route path="/articles/:id" render={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({match}) => {
        const { id } = match.params;
    // getArticle = (...rest) => {
        // console.log(rest)
        // return <h1>Article id: {match.params.id}</h1>
        return <Article id = {id} isOpen key = {id} />
    }

    getIndex = ({match}) => {
        if (!match) return <h2>Article Page:</h2>;
        return <h2>Please select article</h2>
    }
}

export default Articles