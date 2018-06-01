import {normalizedComments as comments} from '../fixtures.js'
import {arrToMap} from '../utils'
import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_COMMENTS_FOR_PAGE, START} from "../constants";
import {OrderedMap, Record, Map} from "immutable";

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
});

const ReducerState = Record({
   entities:  new OrderedMap({}),
   pagination: new Map({}),
   total: null
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

        case LOAD_COMMENTS_FOR_PAGE + START:
            return commentsState.setIn(['pagination', payload.page, 'loading'], true)

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return commentsState
                .set('total', response.total)
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .setIn(['pagination', payload.page, 'ids'], response.records.map(comment => comment.id))
                .setIn(['pagination', payload.page, 'loading'], false)
    }

    return commentsState
}