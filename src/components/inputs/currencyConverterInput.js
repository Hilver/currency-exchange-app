import React from 'react'
import PropTypes from 'prop-types'

import BasicInput from './utils/basicInput'

const CurrencyConverterInput = props => {
	const { onChange, value} = props

	return (
		<BasicInput
			id='currency'
			name='currency'
			type='number'
			onChange={onChange}
			value={value}
			step='0.01'
		/>
	)
}

CurrencyConverterInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.number
}

export default CurrencyConverterInput