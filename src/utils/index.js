//convert array of objects to object of objects
export function arrToMap(arr) {
    return arr.reduce((acc, item) => {
        acc[item.id] = item;
        return acc
    }, {});
}


