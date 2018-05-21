import React, {Fragment} from 'react'
import PropTypes from 'prop-types';

import {connect} from 'react-redux'

function Comment({comment}) {
    return (
        <Fragment>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </Fragment>
    )
}

Comment.propTypes = {
    if: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};

export default connect((state, ownProps) => {
    return {comment: state.comments.find(comment => comment.id === ownProps.id)}
})(Comment)