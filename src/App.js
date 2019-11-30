import React from 'react'

import CurrencyConverter from './components/currencyConverter'
import './styles/main.sass'
import './app.sass'


const App = () => {

	return (
		<div className='app-container'>
			<CurrencyConverter />
		</div>
	)
}

export default App