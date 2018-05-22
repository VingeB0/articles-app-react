import React, {Component} from 'react';

import Article from "./Article";
import accordion from '../decorators/accordion.js'
import PropTypes from "prop-types";

import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        openArticleId: PropTypes.string,
        toggleOpenItem: PropTypes.func
    };

    render() {
        const {articles} = this.props;
        // console.log(articles);
        // console.log(this.state.articles.id === this.state.openArticleId)
        // console.log(this.state.articles);
        return (
            <ul>
                {
                    articles.map(article => <li key={article.id}>
                        <Article
                            article={article}
                            isOpen={article.id === this.props.openItemId}
                            toggleOpen={this.props.toggleOpenItem(article.id)}
                        />
                    </li>)
                }
            </ul>
        );
    }
}

export default connect((state) => {
    return {
        articles: filtratedArticlesSelector(state)
    }

})(accordion(ArticleList));