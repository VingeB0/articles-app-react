import React, {Component} from 'react';

import CommentList from './CommentList.js'
import Article from "./Article";

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : this.props.articles
        }
    }

    render() {
        const {articles} = this.state;

        console.log(this.state.articles);
        return (
            <article>
                <ul>
                    { articles.map((article) => <Article key = {article.id} article = {article} />) }
                </ul>
            </article>
        );
    }
}

export default ArticleList;
