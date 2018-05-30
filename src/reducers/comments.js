import {normalizedComments as comments} from '../fixtures.js'
import {arrToMap} from '../utils'
import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS} from "../constants";
import {OrderedMap, Record} from "immutable";

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
});

const ReducerState = Record ({
    entities: new OrderedMap({})
});
const defaultState = new ReducerState();

// export default (commentsState = arrToMap(comments), action) => {
export default (commentsState = defaultState, action) => {
    // console.log('reducer comment js')
    const {type, payload, randomId, response} = action;
    switch (type) {
        case ADD_COMMENT:
            // console.log( {id: randomId, user: payload.comment.user, text: payload.comment.text} )
            // return {...commentsState, [randomId]: {id: randomId, user: payload.comment.user, text: payload.comment.text }}
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)));
    }
    // console.log(articleState);
    return commentsState;
}