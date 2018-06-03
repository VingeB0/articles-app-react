import React, {Component} from 'react';
import toggleOpen from '../decorators/toggleOpen.js'
import Comment from "./Comment.js";
import CommentForm from "./CommentForm";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import articles from "../reducers/articles";
import {loadArticleComments} from "../actionCreators";
import comments from "../reducers/comments";
import Loader from "./Loader";
import LocalizedText from './LocalizedText'

class CommentList extends Component {
    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string
    }

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
        console.log('---', 3, this.context)
        return (
            <div>
                <ul>
                    <h3>User: {this.context.user}</h3>
                    <button onClick={toggleOpen}>{isOpen ? 'hide comments' : 'show comments'}</button>
                    {this.getBody()}
                </ul>
            </div>
        );
    }

    getBody() {
        // console.log('---this.props---')
        // console.log(this.props.article)
        const {isOpen, article} = this.props;
        if (!isOpen) return null;
        if (article.commentsLoading) return <Loader/>;
        if (!article.commentsLoaded) return null;

        if (!article.comments.length) return (
            <div>
                <p><LocalizedText>No comments yet</LocalizedText></p>
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

export default connect(null, {loadArticleComments}, null, {pure: false})(toggleOpen(CommentList));