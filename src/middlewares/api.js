import {START, SUCCESS, FAIL} from "../constants";

export default store => next => action => {
    const {callAPI, type, ...rest} = action;
    if (!callAPI) return next(action);

    next({
        ...rest, type: type + START
    })

    setTimeout(()=> {
        fetch(callAPI)
            .then(res => res.json())
            .then(response => {
                console.log('rest')
                console.log(rest)
                console.log('response')
                console.log(response)
                next({...rest, type: type + SUCCESS, response})
            })
            .catch(error => ({...rest, type: type + FAIL, error}))
    }, 1000)
}