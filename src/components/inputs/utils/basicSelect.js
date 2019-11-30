import React from 'react'
import PropTypes from 'prop-types'

import './basicSelect.sass'

const BasicSelect = props => {
	const { children, name, onChange, value } = props

	return (
		<select name={name} className='basic-select' onChange={onChange} value={value}>
			{children}
		</select>
	)
}

BasicSelect.propTypes = {
	children: PropTypes.node.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	value: PropTypes.string
}

export default BasicSelect