import React from 'react'

import PropTypes from 'prop-types'
import './basicInput.sass'

const BasicInput = props => {
	const {
		disabled,
		id,
		label,
		name,
		onChange,
		readOnly,
		step,
		type,
		value
	} = props

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
				step={step}
				readOnly={readOnly}
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
	readOnly: false,
	type: 'text',
	value: ''
}

BasicInput.propTypes = {
	disabled: PropTypes.bool,
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	step: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	readOnly: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default BasicInput