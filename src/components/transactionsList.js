/* eslint-disable react/prop-types */
import React from 'react'
import {connect} from 'react-redux'

import ConvertedValue from './utils/convertedValue'
import * as actions from '../store/actions/index'
import BasicButton from './buttons/utils/basicButton'

const TransactionsList = props => {
	const {transactions, transactionsSummary, deleteTransaction} = props

	const handleDeleteTransaction = id => {
		deleteTransaction(id)
	}

	return (
		<div className='transaction-list-container'>
			<table cellSpacing='20' cellPadding='20'>
				<thead>
					<tr>
						<th>Name</th>
						<th scope='col'>From</th>
						<th>To</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{transactions.map(transaction => {
						return (
							<tr key={transaction.id}>
								<td>{transaction.name}</td>
								<td scope='col'>{`${transaction.amount} ${transaction.from}`}</td>
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
				</tbody>
				<tfoot>
					<tr>
						<td>SUMMARY</td>
						<td scope='col'>{transactionsSummary}</td>
						<td>{/*
							Oups, I don't know why I thought I will be able
							to get this value from HOC :D
						*/}</td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		transactions: state.transactions,
		transactionsSummary: state.transactions.reduce((acc, next) => {
			acc += next.amount
			return acc
		},0)
	}
}

export default connect(mapStateToProps, actions)(TransactionsList)
