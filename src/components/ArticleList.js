import React, {Component} from 'react';

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

        // console.log(this.state.articles);
        return (
            <ul>
                { articles.map(article => <li key = {article.id}><Article article = {article}/></li>) }
            </ul>
        );
    }
}

export default ArticleList;
