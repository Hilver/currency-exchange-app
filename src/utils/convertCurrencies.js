/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import toDecimal from './convertToDecimalNumber'

export const mapStateToProps = state => ({
	currencies: state.currencies,
	transactions: state.transactions
})

export const CurrenciesConverter = (WrappedComponent) => {
	const handleConversion = (currencies, amount, from, to) => {
		const [getCurrency] = currencies.filter(currency => currency.base === from)
		return toDecimal(getCurrency.currencyRates[to] * amount)
	}

	const hocComponent = ({ ...props }) => <WrappedComponent handleConversion={handleConversion} {...props} />

	hocComponent.propTypes = {
		currencies: PropTypes.arrayOf(PropTypes.object),
		transactions: PropTypes.arrayOf(PropTypes.object)
	}

	return hocComponent
}

export default WrapperComponent => connect(mapStateToProps)(CurrenciesConverter(WrapperComponent))
