import { createStore } from 'redux'
import reducers from './reducers/index'

// eslint-disable-next-line no-undef
export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
