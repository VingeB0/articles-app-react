import {
    DELETE_ARTICLE, INCREMENT, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT,
    LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, FAIL, SUCCESS, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE
} from '../constants'
import {push, replace} from 'react-router-redux';
//push save history
//replace don't save it

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: {dateRange}
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: {selected}
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: 'http://localhost:3001/api/article'
    }
}

export function loadArticleComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: { articleId },
        callAPI: `http://localhost:3001/api/comment?article=${articleId}`
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id}
        });

        setTimeout(() => {
            fetch(`http://localhost:3001/api/article/${id}`)
                .then(res => {
                    console.log(res)
                    if (res.status >= 400) {
                        throw new Error(res.statusText)
                    }
                    return res.json()
                })
                .then(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: {id, response}
                }))
                .catch(error => {
                    dispatch({
                        type: LOAD_ARTICLE + FAIL,
                        payload: {id, error}
                    })
                    dispatch(replace('/error'))
                })
        }, 1000)
    }
}

//
// export function loadArticle() {
//     return {
//         type: LOAD_ARTICLE,
//         callAPI: '/api/article/${id}'
//     }
// }

export function checkAndLoadCommentsForPage(page) {
    return (dispatch, getState) => {
        const {comments: {pagination}} = getState()
        if (pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return

        dispatch({
            type: LOAD_COMMENTS_FOR_PAGE,
            payload: { page },
            callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
        })
    }
}