import {normalizedArticles as articles} from '../fixtures.js';
import {arrToMap} from '../utils';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from "../constants";

// export default (articleState = arrToMap(articles), action) => {
export default (articleState = {}, action) => {
    const {type, payload, randomId, response} = action;

        switch (type) {
            case DELETE_ARTICLE:
                const tmpState = {...articleState};
                delete tmpState[payload.id];
                return tmpState;

            case ADD_COMMENT:
                const article = articleState[payload.articleId];
                console.log('-------');
                console.log(articleState);
                console.log(article);
                return {
                    ...articleState,
                    [payload.articleId]: {
                        ...article,
                        comments: (article.comments.concat(randomId) || [].concat(randomId))
                    },
                };
            // return articleState.filter(article => article.id !== action.payload.id)
            case LOAD_ALL_ARTICLES:
                console.log(response);
                return arrToMap(response)
    }
    return articleState;
}