import {normalizedArticles as articles} from '../fixtures.js';
import {arrToMap} from '../utils';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS, LOAD_ARTICLE, LOAD_ARTICLE_COMMENTS} from "../constants";
import {Map, Record, OrderedMap} from 'immutable';

const ArticleRecord = Record({
    text: null,
    title: '',
    id: undefined,
    loading: false,
    commentsLoading: false,
    commentsLoaded: false,
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
                // console.log('REDUSER SUCCESS');
                // console.log(response)
                // console.log(ArticleRecord)
                // console.log(arrToMap(response, ArticleRecord).toJS())
                return articleState
                    .set('entities', arrToMap(response, ArticleRecord))
                    .set('loading', false)
                    .set('loaded', true)
                // return arrToMap(response, ArticleRecord)

            case LOAD_ARTICLE + START:
                return articleState.setIn(['entities', payload.id, 'loading'], true);

            case LOAD_ARTICLE + SUCCESS:
                return articleState.setIn(['entities', payload.id], new ArticleRecord(payload.response));

            case LOAD_ARTICLE_COMMENTS + START:
                return articleState.setIn(['entities', payload.articleId, 'commentsLoading'], true);

            case LOAD_ARTICLE_COMMENTS + SUCCESS:
                return articleState
                    .setIn(['entities', payload.articleId, 'commentsLoading'], false)
                    .setIn(['entities', payload.articleId, 'commentsLoaded'], true)
    }
    return articleState;
}
