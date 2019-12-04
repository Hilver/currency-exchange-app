/* eslint-disable no-undef */
import actions from '../../../store/actions/currencies'
import * as types from '../../../store/actions/types'

const { setBaseCurrency, setValueCurrency } = actions
const { SET_BASE_CURRENCY, SET_VALUE_CURRENCY} = types

describe('action', () => {
	it('setBaseCurrency should create an action to set base currency', () => {
		const base = 'EURO'
		const expectedAction = {
			type: SET_BASE_CURRENCY,
			payload: base
		}
		expect(setBaseCurrency(base)).toEqual(expectedAction)
	}),
	it('setValueCurrency should create an action to set Value currency', () => {
		const base = 'EURO',
			currency = 'PLN',
			value = 3.24

		const expectedAction = {
			type: SET_VALUE_CURRENCY,
			payload: {
				base,
				currency,
				value
			}
		}
		expect(setValueCurrency(base,currency,value)).toEqual(expectedAction)
	})
})