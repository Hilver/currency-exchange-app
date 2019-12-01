import React from 'react'
import PropTypes from 'prop-types'

import Converter from '../../utils/convertCurrencies'

const ConvertedValue = props => {
	const {currencies, amount, from, to, handleConversion} = props
	return (
		<div>
			{`
				${handleConversion(currencies, amount, from, to)}
			`}
		</div>
	)
}

ConvertedValue.propTypes = {
	currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
	amount: PropTypes.number.isRequired,
	from: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	handleConversion: PropTypes.func.isRequired
}

export default Converter(ConvertedValue)
