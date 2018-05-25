import {normalizedComments as comments} from '../fixtures.js'
import {arrToMap} from '../utils'
import {ADD_COMMENT} from "../constants";

export default (commentsState = arrToMap(comments), action) => {
    // console.log('reducer comment js')
    // console.log(comments)
    // console.log(action)
    const {type, payload, randomId} = action;
    switch (type) {
        case ADD_COMMENT:
            // console.log( {id: randomId, user: payload.comment.user, text: payload.comment.text} )
            return {...commentsState, [randomId]: {id: randomId, user: payload.comment.user, text: payload.comment.text }}
    }
    // console.log(articleState);
    return commentsState;
}