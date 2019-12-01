import React from 'react'

import CurrencyConverter from './components/currencyConverter'
import TransactionManager from './components/transactionManager'
import TransactionsList from './components/transactionsList'
import './styles/main.sass'
import './app.sass'


const App = () => {

	return (
		<div className='app-container'>
			<CurrencyConverter />
			<TransactionManager />
			<TransactionsList />
		</div>
	)
}

export default App