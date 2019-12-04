/* eslint-disable no-undef */
import reducer from '../../../store/reducers/currencies'
import * as types from '../../../store/actions/types'

const {SET_BASE_CURRENCY, SET_VALUE_CURRENCY} = types

describe('currencies reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual([
			{
				base: 'EURO',
				currencyRates: {
					PLN: 1.00
				}
			}
		])
	})

	it('should handle SET_BASE_CURRENCY', () => {
		expect(
			reducer([], {
				type: SET_BASE_CURRENCY,
				payload: 'PLN'
			})
		).toEqual([
			{
				base: 'PLN',
				currencyRates: {}
			}
		])

		expect(
			reducer([{
				base: 'EURO',
				currencyRates: {
					USD: 1.23
				},
			}],
			{
				type: SET_BASE_CURRENCY,
				payload: 'YEN'
			})
		).toEqual([
			{
				base: 'EURO',
				currencyRates: {
					USD: 1.23
				}
			},
			{
				base: 'YEN',
				currencyRates: {}
			}
		])

		expect(
			reducer([{
				base: 'EURO',
				currencyRates: {
					USD: 1.23
				},
			}],
			{
				type: SET_BASE_CURRENCY,
				payload: 'EURO'
			}
			)
		).toEqual([
			{
				base: 'EURO',
				currencyRates: {
					USD: 1.23
				}
			}
		])
	})

	it('should handle SET_VALUE_CURRENCY', () => {
		expect(reducer([{
			base: 'EURO',
			currencyRates: {
				USD: 1.23
			},
		}],
		{
			type: SET_VALUE_CURRENCY,
			payload: {
				base: 'EURO',
				currency: 'USD',
				value: 3.21
			}
		})
		).toEqual([{
			base: 'EURO',
			currencyRates: {
				USD: 3.21
			}}
		])
	})
})