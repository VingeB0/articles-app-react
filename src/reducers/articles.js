import {normalizedArticles as articles} from '../fixtures.js';
import {arrToMap} from '../utils';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS} from "../constants";
import {Map, Record, OrderedMap} from 'immutable';

const ArticleRecord = Record({
    text: undefined,
    title: '',
    id: undefined,
    comments: []
});

const ReducerState = Record ({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
});
const defaultState = new ReducerState();

// export default (articleState = arrToMap(articles), action) => {
// export default (articleState = {}, action) => {
export default (articleState = defaultState, action) => {
    const {type, payload, randomId, response} = action;

        switch (type) {
            case DELETE_ARTICLE:
                return articleState.deleteIn(['entities', payload.id]);
                // const tmpState = {...articleState};
                // delete tmpState[payload.id];
                // return tmpState;

            case ADD_COMMENT:
                return articleState.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId));
            // return articleState.update(payload.articleId, (article) => article.set())

            // const article = articleState[payload.articleId];
            // return {
            //     ...articleState,
            //     [payload.articleId]: {
            //         ...article,
            //         comments: (article.comments.concat(randomId) || [].concat(randomId))
            //     },
            // };

            case LOAD_ALL_ARTICLES + START:
                return articleState.set('loading', true);

            // return articleState.filter(article => article.id !== action.payload.id)
            case LOAD_ALL_ARTICLES + SUCCESS:
                return articleState
                    .set('entities', arrToMap(response, ArticleRecord))
                    .set('loading', false)
                    .set('loaded', true)
                // return arrToMap(response, ArticleRecord)
    }
    return articleState;
}