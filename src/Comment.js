import React from 'react';

function Comment({comment}) {
    console.log(comment)
    return (
        <div>
            {/*<p>{comment.text}</p>*/}
            <span>
                {/*<b>by {comment.user}</b>*/}
            </span>
        </div>
    )
}

export default Comment