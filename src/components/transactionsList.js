/* eslint-disable react/prop-types */
import React from 'react'
import {connect} from 'react-redux'

import ConvertedValue from './utils/convertedValue'
import * as actions from '../store/actions/index'
import BasicButton from './buttons/utils/basicButton'
import BasicTable from './tables/utils/basicTable'

const TransactionsList = props => {
	const {transactions, transactionsSummary, deleteTransaction} = props

	const handleDeleteTransaction = id => {
		deleteTransaction(id)
	}

	const headers = ['Name', 'From', 'To', '']
	const footers = [
		'SUMMARY',
		transactionsSummary,
		// eslint-disable-next-line react/jsx-key
		<ConvertedValue
			from='EURO'
			to='PLN'
			amount={transactionsSummary}
		/>
	]

	return (
		<div className='transaction-list-container'>
			<BasicTable headers={headers} footers={footers}>
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
								{transaction.to}
							</td>
							<td>
								<BasicButton onClick={() => handleDeleteTransaction(transaction.id)}>
										DELETE
								</BasicButton>
							</td>
						</tr>
					)
				})}
			</BasicTable>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		transactions: state.transactions,
		transactionsSummary: state.transactions.reduce((acc, next) => {
			acc += Number(next.amount)
			return acc
		},0)
	}
}

export default connect(mapStateToProps, actions)(TransactionsList)
