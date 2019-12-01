/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import handleConversion from './handleConversion'

export const mapStateToProps = state => ({
	currencies: state.currencies,
	transactions: state.transactions
})

export const CurrenciesConverter = (WrappedComponent) => {

	const hocComponent = ({ ...props }) => <WrappedComponent handleConversion={handleConversion} {...props} />

	hocComponent.propTypes = {
		currencies: PropTypes.arrayOf(PropTypes.object),
		transactions: PropTypes.arrayOf(PropTypes.object)
	}

	return hocComponent
}

export default WrapperComponent => connect(mapStateToProps)(CurrenciesConverter(WrapperComponent))
