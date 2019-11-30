import React from 'react'
import PropTypes from 'prop-types'

import BasicSelect from './utils/basicSelect'

const SelectCurrency = props => {
	const {name, onChange, options,} = props

	return (
		<BasicSelect name={name} onChange={onChange}>
			{options.map(el => {
				return (
					<option key={el.id}>{el.currency}</option>
				)
			})}
		</BasicSelect>
	)
}

SelectCurrency.propTypes = {
	options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

export default SelectCurrency