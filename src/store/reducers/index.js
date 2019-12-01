import { combineReducers } from 'redux'
import currencyReducer from './currencies'
import transactionReducer from './transactions'

export default combineReducers({
	currencies: currencyReducer,
	transactions: transactionReducer
})