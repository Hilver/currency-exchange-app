import {SET_BASE_CURRENCY, SET_VALUE_CURRENCY} from '../actions/types'

const initialState = [{
	base: 'EURO',
	currencyRates: {
		PLN: 1.00
	}
}]

function currenciesExchangeRate (state = initialState, action) {
	switch (action.type) {
	case SET_BASE_CURRENCY:
		state.filter(currency => currency.base === action.payload).length === 0 && state.push({base: action.payload})
		return state
	case SET_VALUE_CURRENCY: {
		const newState = state.map(currency => {
			if (currency.base === action.payload.base) {
				currency.currencyRates[action.payload.currency] = action.payload.value
			}
			return currency
		})
		return newState
	}
	default:
		return state
	}
}

export default currenciesExchangeRate