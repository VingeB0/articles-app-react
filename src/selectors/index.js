import {createSelector} from 'reselect'

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    return articles.filter(article => {
        return (!filters.selected.length || filters.selected.includes(article.id)) &&
            (!filters.dateRange.to || !filters.dateRange.from || Date.parse(article.date) > filters.dateRange.from && Date.parse(article.date) < filters.dateRange.to)
    })
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    // console.log('commentFactory ---', id)
    // return comments.find(comment => comment.id === id)
    return comments[id]
});

//
// export function filteredArticles({filters, articles}) {
//     return articles.filter(article => {
//         return (!filters.selected.length || filters.selected.includes(article.id)) &&
//             (!filters.dateRange.to || !filters.dateRange.from || Date.parse(article.date) > filters.dateRange.from && Date.parse(article.date) < filters.dateRange.to)
//     });
// }