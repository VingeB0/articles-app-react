import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {addComment} from "../../actionCreators";
import './styles.css'

class CommentForm extends Component {

    state = {
        user: 'dawdawdwa',
        text: '31323231312312312312321312312312'
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
        this.props.addComment(this.state);
        // console.log(this.state)
        this.setState({
            user: '',
            text: ''
        });
    };

    render() {
        // console.log(this.props);
        // console.log(this.state);

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

export default connect(null, (dispatch, ownProps) => ({
    addComment: (comment) => {
        // console.log('ownProps')
        // console.log(ownProps)
        dispatch(addComment(comment, ownProps.articleId))
    }
}))(CommentForm)