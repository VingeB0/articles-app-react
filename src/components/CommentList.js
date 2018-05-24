import React, {Component} from 'react';
import toggleOpen from '../decorators/toggleOpen.js'
import Comment from "./Comment.js";
import CommentForm from "./CommentForm";
import PropTypes from "prop-types";
import articles from "../reducers/articles";

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    getBody() {
        const {isOpen, article} = this.props;
        if (!isOpen) return null;

        if (!article.comments) return <p>No comments yet</p>;

        return (
            <div>
                {article.comments.map(id => <li key={id}><Comment id = {id}/></li>)}
            </div>
        )
    }

    render() {
        const {isOpen, toggleOpen, article} = this.props;

        return (
            <div>
                <CommentForm articleId = {article.id}/>
                <ul>
                    <button onClick={toggleOpen}>{isOpen ? 'hide comments' : 'show comments'}</button>
                    {this.getBody()}
                </ul>
            </div>
        );
    }
}

export default toggleOpen(CommentList);