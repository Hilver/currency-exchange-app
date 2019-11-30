import { combineReducers } from 'redux'
import currencyReducer from './currencies'

export default combineReducers({
	currencies: currencyReducer
})