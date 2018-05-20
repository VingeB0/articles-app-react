const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
};

export default (filters = defaultFilters, action) => {
    switch (action.type) {
        case 'CHANGE_DATE_RANGE':
            //return Object.assign({}, fulters, {dataRAnge: payload.dataRange)}
            return {...filters, dateRange: action.payload.dateRange};
        case 'CHANGE_SELECTION':
            return {...filters, selected: action.payload.selected};
        case 'DELETE_ARTICLE':
            return {...filters, selected: filters.selected.filter(id => id !== action.payload.id)}
    }
    return filters
}