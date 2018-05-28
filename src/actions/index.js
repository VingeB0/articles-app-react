import {
    INCREMENT, DECREMENT, DELETE_ARTICLE, LOAD_ALL_ARTICLES, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT
} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {
            id
        }
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callApi: 'http://localhost:3001/api/article'
        // callApi: 'https://jsonplaceholder.typicode.com/posts/1'
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: {
            dateRange
        }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: {
            selected
        }
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            comment, articleId
        },
        generateId: true
    }
}