import React from 'react'

import CurrencyConverter from './components/currencyConverter'
import TransactionManager from './components/transactionManager'
import './styles/main.sass'
import './app.sass'


const App = () => {

	return (
		<div className='app-container'>
			<CurrencyConverter />
			<TransactionManager />
		</div>
	)
}

export default App