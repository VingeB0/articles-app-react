import React, {Component} from 'react';
import Article from "./Article";
import accordion from '../decorators/accordion.js'
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'
import {loadAllArticles} from "../actionCreators";
import Loader from './loader.js';

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentDidMount() {
        const {loaded, loading, loadAllArticles} = this.props;
        if(!loaded && !loading) loadAllArticles()
    }

    render() {
        // console.log('---', 'update article list');
        // console.log(this.props.articles);
        const { articles, openItemId, toggleOpenItem, loading} = this.props
        if (loading) return <Loader/>
        const articleElements = articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect((state) => {
    // console.log('state')
    // console.log(state.articles)
    // console.log('filtratedArticlesSelector(state)')
    // console.log(filtratedArticlesSelector(state))
    return {
        articles: filtratedArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded,
    }
}, {loadAllArticles})(accordion(ArticleList))