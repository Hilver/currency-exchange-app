import React from 'react'

import CurrencyConverter from './components/currencyConverter'
import TransactionManager from './components/transactionManager'
import TransactionsList from './components/transactionsList'
import MostValuableTransactionList from './components/mostValuableTransactionList'
import './styles/main.sass'
import './app.sass'


const App = () => {

	return (
		<div className='app-container'>
			<CurrencyConverter />
			<TransactionManager />
			<div className='list-container'>
				<TransactionsList />
				<MostValuableTransactionList />
			</div>
		</div>
	)
}

export default App