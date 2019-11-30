import {SET_BASE_CURRENCY, SET_VALUE_CURRENCY} from './types'

export default {
	setBaseCurrency: base => ({
		type: SET_BASE_CURRENCY,
		payload: base
	}),
	setValueCurrency: (base, currency, value) => ({
		type: SET_VALUE_CURRENCY,
		payload: {
			base,
			currency,
			value
		}
	})
}

