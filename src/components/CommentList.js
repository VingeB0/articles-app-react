import React, {Component} from 'react';
import toggleOpen from '../decorators/toggleOpen.js'
import Comment from "./Comment.js";
import PropTypes from "prop-types";
import './style.css'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    state = {
        inputValue: '',
        user: '',
        text: ''
    };

    getBody() {
        const {isOpen} = this.props;
        if (!isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>;

        return (
            <div>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </div>
        )
    }

    handleChange = type => ev => {
        if (ev.target.value.length > limits[type].max) return;
        this.setState({
            [type]: ev.target.value
        });
    };

    getClassName = (type) => (this.state[type].length && this.state[type].length < limits[type].min) ? 'comment-error' : null;

    handleSubmit = (ev) => {
      ev.preventDefault();
      this.setState({
          user: '',
          text: ''
      });
    };

    render() {
        const {isOpen, toggleOpen} = this.props;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label htmlFor="comment_user">User</label>
                    <br/>
                    <input
                        id="comment_user"
                        type="text"
                        placeholder="User name"
                        value={this.state.user}
                        onChange={this.handleChange('user')}
                        className={this.getClassName('user')}
                        required
                    />
                    <br/>
                    <label htmlFor="comment_text">Text</label>
                    <br/>
                    <textarea
                        id="comment_text"
                        placeholder="Text message"
                        value={this.state.text}
                        onChange={this.handleChange('text')}
                        className={this.getClassName('text')}
                        required
                    />
                    <br/>
                    <button>Add new comment</button>
                </form>

                <ul>
                    <button onClick={toggleOpen}>{isOpen ? 'hide comments' : 'show comments'}</button>
                    {this.getBody()}
                </ul>
            </div>
        );
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
};

export default toggleOpen(CommentList);