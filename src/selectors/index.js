import {createSelector} from 'reselect'
import {mapToArr} from '../utils'

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles.entities;

const commentsGetter = state => state.comments.entities;
const idGetter = (state, props) => props.id;

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    return mapToArr(articles).filter(article => {
    // return articles.filter(article => {
        return (!filters.selected.length || filters.selected.includes(article.id)) &&
            (!filters.dateRange.to || !filters.dateRange.from || Date.parse(article.date) > filters.dateRange.from && Date.parse(article.date) < filters.dateRange.to)
    })
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    // console.log('commentFactory ---', id)
    // return comments.find(comment => comment.id === id)
    return comments.get(id)
});

//
// export function filteredArticles({filters, articles}) {
//     return articles.filter(article => {
//         return (!filters.selected.length || filters.selected.includes(article.id)) &&
//             (!filters.dateRange.to || !filters.dateRange.from || Date.parse(article.date) > filters.dateRange.from && Date.parse(article.date) < filters.dateRange.to)
//     });
// }