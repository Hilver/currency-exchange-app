/* eslint-disable react/prop-types */
import React from 'react'
import {connect} from 'react-redux'

import BasicTable from './tables/utils/basicTable'
import ConvertedValue from './utils/convertedValue'

const MostValuableTransaction = props => {
	const {mostValuableTransaction} = props // redux

	return (
		<center>
			<div>Most Valuable Transaction</div>
			<BasicTable headers={['Name', 'From', 'To']}>
				{mostValuableTransaction.map((transaction, i) => {
					return (
						<tr key={i}>
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
						</tr>
					)
				})}
			</BasicTable>
		</center>
	)
}

function mapStateToProps (state){
	return {
		mostValuableTransaction: state.transactions.length > 0
			? [...state.transactions].sort((a, b) => b.amount - a.amount).slice(0,1)
			: []
	}
}

export default connect(mapStateToProps)(MostValuableTransaction)
