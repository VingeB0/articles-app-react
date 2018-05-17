import React, {Component} from 'react';
import PropTypes from "prop-types";
import './styles.css'

class CommentForm extends Component {

    state = {
        inputValue: '',
        user: '',
        text: ''
    };

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
        return (
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

export default CommentForm