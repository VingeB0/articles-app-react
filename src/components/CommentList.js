import React, {Component} from 'react';
import toggleOpen from '../decorators/toggleOpen.js'
import Comment from "./Comment.js";

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    getBody() {
        const {isOpen} = this.props;
        if (!isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>;

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </ul>
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