import React, {Component} from 'react';

import Comment from "./Comment.js";

class CommentList extends Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;
        if (!comments || !comments.length) return <p>No comments yet</p>;

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </ul>
        )
    }

    render() {
        return (
            <ul>
                <h1>123</h1>
                <button onClick = {this.toggleOpen}>{this.state.isOpen ? 'hide comments' : 'show comments'}</button>
                {this.getBody()}
            </ul>
        );
    }
}

export default CommentList;