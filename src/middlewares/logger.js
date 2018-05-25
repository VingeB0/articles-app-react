export default (store) => (next) => (action) => {
    // console.log('state before', store.getState());
    // console.log('dispatch', action);
    next(action)
    // console.log('state after', store.getState());
}