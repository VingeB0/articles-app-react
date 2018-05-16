import React, {Component} from 'react';
import toggleOpen from '../decorators/toggleOpen.js'
import Comment from "./Comment.js";
import PropTypes from "prop-types";

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    getBody() {
        const {isOpen} = this.props;
        if (!isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>;

        return (
            <div>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </div>
        )
    }

    render() {
        const {isOpen, toggleOpen} = this.props;

        return (
            <ul>
                <h1>123</h1>
                <button onClick = {toggleOpen}>{isOpen ? 'hide comments' : 'show comments'}</button>
                {this.getBody()}
            </ul>
        );
    }
}

export default toggleOpen(CommentList);