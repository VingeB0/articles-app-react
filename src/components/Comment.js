import React, {Fragment} from 'react'
import PropTypes from 'prop-types';

function Comment({comment}) {
    return (
        <Fragment>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </Fragment>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};

export default Comment