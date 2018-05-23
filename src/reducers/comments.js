import {normalizedComments as comments} from '../fixtures.js'
import {arrToMap} from '../utils'
import {ADD_COMMENT} from "../constants";

export default (commentsState = arrToMap(comments), action) => {
    // const {type, payload} = action;
    switch (action.type) {
        case ADD_COMMENT:
            return {...commentsState, [action.randomId]: action.payload.comments}
    }
    // console.log(articleState);
    return commentsState;
}