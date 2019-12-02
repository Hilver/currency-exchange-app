import React from 'react'
import PropTypes from 'prop-types'

const BasicTable = props => {
	const { children, footers, headers } = props

	const getRandomKey = () => Math.random() * 10

	return (
		<table cellSpacing='20' cellPadding='20'>
			{headers &&
			<thead>
				<tr>
					{headers.map(header => {
						return (
							<th key={getRandomKey()}>{header}</th>
						)
					})}
				</tr>
			</thead>}
			<tbody>
				{children}
			</tbody>
			{footers &&
			<tfoot>
				<tr>
					{footers.map(footer => {
						return (
							<td key={getRandomKey()}>{footer}</td>
						)
					})}
				</tr>
			</tfoot>}
		</table>
	)
}

BasicTable.propTypes = {
	children: PropTypes.node.isRequired,
	footers: PropTypes.array,
	headers: PropTypes.array,
}

export default BasicTable
