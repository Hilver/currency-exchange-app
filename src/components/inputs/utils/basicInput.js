import React from 'react'

import PropTypes from 'prop-types'
import './basicInput.sass'

const BasicInput = props => {
	const {disabled, id, label, name, onChange, type, value} = props

	return (
		<div className='input-box'>
			<input
				id={id}
				name={name}
				type={type}
				disabled={disabled}
				onChange={onChange}
				required
				value={value}
			/>
			<label htmlFor={id}>
				<span className='input-label-content'>
					{label}
				</span>
			</label>
		</div>
	)
}

BasicInput.defaultProps = {
	disabled: false,
	label: '',
	type: 'text',
	value: ''
}

BasicInput.propTypes = {
	disabled: PropTypes.bool,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default BasicInput