import {normalizedArticles as articles} from '../fixtures.js';
import {arrToMap} from '../utils';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from "../constants";
import {Map, Record} from 'immutable';

const ArticleRecord = Record({
    text: undefined,
    title: '',
    id: undefined,
    comments: []
});

const defaultState = new Map({});

// export default (articleState = arrToMap(articles), action) => {
// export default (articleState = {}, action) => {
export default (articleState = defaultState, action) => {
    const {type, payload, randomId, response} = action;

        switch (type) {
            case DELETE_ARTICLE:
                return articleState.delete(payload.id);
                // const tmpState = {...articleState};
                // delete tmpState[payload.id];
                // return tmpState;

            case ADD_COMMENT:
                return articleState.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId));
            // return articleState.update(payload.articleId, (article) => article.set())

            // const article = articleState[payload.articleId];
            // return {
            //     ...articleState,
            //     [payload.articleId]: {
            //         ...article,
            //         comments: (article.comments.concat(randomId) || [].concat(randomId))
            //     },
            // };

            // return articleState.filter(article => article.id !== action.payload.id)
            case LOAD_ALL_ARTICLES:
                console.log(response);
                return arrToMap(response, ArticleRecord)
    }
    return articleState;
}