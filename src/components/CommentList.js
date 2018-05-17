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

    getStyle = (type) => (this.state[type].length >= limits[type].max || this.state[type].length <= limits[type].min) ? {border: '2px solid red'} : null;

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
                        style={this.getStyle('user')}
                        // required
                    />
                    <br/>
                    <label htmlFor="comment_text">Text</label>
                    <br/>
                    <textarea
                        id="comment_text"
                        placeholder="Text message"
                        value={this.state.text}
                        onChange={this.handleChange('text')}
                        style={this.getStyle('text')}
                        // required
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