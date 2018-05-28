import {Map, OrderedMap} from 'immutable';

//convert array of objects to object of objects
export function arrToMap(arr, DataRecord = Map) {
    return arr.reduce((acc, item) =>
        acc.set(item.id, new DataRecord(item))
    , new OrderedMap({}))
}
// export function arrToMap(arr) {
//     return arr.reduce((acc, item) => {
//         acc[item.id] = item
//         return acc
//     }, {})
// }

//convert object of objects to array of objects
export function mapToArr(obj) {
    return obj.valueSeq().toArray()
}
// export function mapToArr(obj) {
//     return Object.keys(obj).map(id => obj[id])
// }