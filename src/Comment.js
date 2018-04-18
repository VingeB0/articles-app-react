import React, {Fragment} from 'react'

function Comment({comment}) {
    return (
        <Fragment>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </Fragment>
    )
}

export default Comment