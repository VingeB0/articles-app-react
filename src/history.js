import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
window.routerHistory = history
//routerHistory.push('/error')
//routerHistory.back()

export default history