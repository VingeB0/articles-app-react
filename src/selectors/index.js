import {createSelector} from 'reselect'

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    return articles.filter(article => {
        return (!filters.selected.length || filters.selected.includes(article.id)) &&
            (!filters.dateRange.to || !filters.dateRange.from || Date.parse(article.date) > filters.dateRange.from && Date.parse(article.date) < filters.dateRange.to)
    })
});
//
// export function filteredArticles({filters, articles}) {
//     return articles.filter(article => {
//         return (!filters.selected.length || filters.selected.includes(article.id)) &&
//             (!filters.dateRange.to || !filters.dateRange.from || Date.parse(article.date) > filters.dateRange.from && Date.parse(article.date) < filters.dateRange.to)
//     });
// }