import React from 'react'
import PropTypes from 'prop-types'

import BasicSelect from './utils/basicSelect'

const SelectCurrency = props => {
	const {name, onChange, options, value} = props

	return (
		<BasicSelect name={name} onChange={onChange} value={value}>
			{options.map((el, index) => {
				return (
					<option key={index}>{el.currency}</option>
				)
			})}
		</BasicSelect>
	)
}

SelectCurrency.propTypes = {
	options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string
}

export default SelectCurrency