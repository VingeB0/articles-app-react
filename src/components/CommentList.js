import React, {Component} from 'react';
import toggleOpen from '../decorators/toggleOpen.js'
import Comment from "./Comment.js";
import CommentForm from "./CommentForm";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import articles from "../reducers/articles";
import {loadArticleComments} from "../actionCreators";
import comments from "../reducers/comments";
import Loader from "./loader";

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    componentWillReceiveProps({isOpen, article, loadArticleComments}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {isOpen, toggleOpen, article} = this.props;

        return (
            <div>
                <ul>
                    <button onClick={toggleOpen}>{isOpen ? 'hide comments' : 'show comments'}</button>
                    {this.getBody()}
                </ul>
            </div>
        );
    }

    getBody() {
        console.log('---this.props---')
        console.log(this.props.article)
        const {isOpen, article} = this.props;
        if (!isOpen) return null;
        if (article.commentsLoading) return <Loader/>;
        if (!article.commentsLoaded) return null;

        if (!article.comments.length) return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId = {article.id} />
            </div>
        );

        return (
            <div>
                {article.comments.map(id => <li key={id}><Comment id={id}/></li>)}
                <div>
                    <CommentForm articleId = {article.id} />
                </div>
            </div>
        )
    }
}

export default connect(null, {loadArticleComments})(toggleOpen(CommentList));