import {normalizedArticles as articles} from '../fixtures.js'

export default (articleState = articles, action) => {
    switch (action.type) {
        case 'DELETE_ARTICLE':
            console.log('OLOLOL');
            return articleState.filter(article => article.id !== action.payload.id)
    }
    return articleState;
}