export default store => next => action => {
    const {callApi} = action;
    if (!callApi) return next(action);

    setTimeout(()=> {
        fetch(callApi)
            .then(res => res.json())
            .then(response => {
                console.log('response')
                console.log(response)
                next({...action, response})
            })
    }, 1000)
}