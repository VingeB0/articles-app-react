import {normalizedArticles as articles} from '../fixtures.js'

export default (articleState = articles, action) => {
    // const {type, payload} = action;
    switch (action.type) {
        case 'DELETE_ARTICLE':
            // console.log(articleState.filter(article => article.id !== action.payload.id))
            console.log('OLOLOL');
            return articleState.filter(article => article.id !== action.payload.id)
    }
    // console.log(articleState);
    return articleState;
}