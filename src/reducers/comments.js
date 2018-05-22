import {normalizedComments as comments} from '../fixtures.js'

console.log(comments)

const commentsMap = comments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {});

console.log(commentsMap)

export default (commentsState = commentsMap, action) => {
    // const {type, payload} = action;
    switch (action.type) {
    }
    // console.log(articleState);
    return commentsState;
}