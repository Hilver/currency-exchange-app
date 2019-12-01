/* eslint-disable react/prop-types */
import React from 'react'
import {connect} from 'react-redux'

import ConvertedValue from './utils/convertedValue'

const TransactionsList = props => {
	const {transactions} = props

	return (
		<div className='transaction-list-container'>
			<table cellSpacing='10' cellPadding='10'>
				<thead>
					<tr>
						<th>Name</th>
						<th>From</th>
						<th>To</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{transactions.map(transaction => {
						return (
							<tr key={transaction.id}>
								<td>{transaction.name}</td>
								<td>{`${transaction.amount} ${transaction.from}`}</td>
								<td>
									<ConvertedValue
										from={transaction.from}
										to={transaction.to}
										amount={transaction.amount}
									/>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		transactions: state.transactions
	}
}

export default connect(mapStateToProps)(TransactionsList)
