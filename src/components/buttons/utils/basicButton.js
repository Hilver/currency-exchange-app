import React from 'react'
import PropTypes from 'prop-types'

import './basicButton.sass'

const basicButton = props => {
	const {children, onClick} = props
	return (
		<button onClick={onClick} className='button'>
			{children}
		</button>
	)
}

basicButton.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func.isRequired
}

export default basicButton
