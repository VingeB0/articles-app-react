import React, {Component} from 'react';

import Comment from "./Comment.js";

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : true
        };
    }

    render() {
        // const {comments} = this.props;
        console.log(this.props);
        {/*<Comment comment = {comment} />*/}

        return (
            <ul>
                { this.props.comments.map((comment) => <li key = {comment.id}>{comment.id}</li>) }
            </ul>
        );
    }
}

export default CommentList;