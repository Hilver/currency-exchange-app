import React, {useState} from 'react'
import {connect} from 'react-redux'

import BasicInput from './inputs/utils/basicInput'
import BasicButton from './buttons/utils/basicButton'
import * as actions from '../store/actions/index'
import decimalNum from '../utils/convertToDecimalNumber'
import useCurrenciesList from '../utils/useCurrenciesList'
import SelectCurrency from './inputs/selectCurrency'
import ConvertedValue from './utils/convertedValue'
import './transactionManager.sass'

const TransactionManager = props => {
	// eslint-disable-next-line react/prop-types
	const {setTransaction} = props // redux action
	const [transactionName, setTransactionName] = useState()
	const [transactionAmount, setTransactionAmount] = useState(0)
	const [from, setFrom] = useState('EURO')
	const [to, setTo] = useState('PLN')
	const {
		availableCurrenciesBase,
		availableCurrenciesToExchange,
		updateAvailableCurrenciesBase,
		updateAvailableCurrenciesToExchange
	} = useCurrenciesList()

	const handleTransactionName = e => {
		setTransactionName(e.target.value)
	}
	const handleTransactionAmount = e => {
		setTransactionAmount(decimalNum(Number(e.target.value), 0, 1))
	}
	const handleExchangeCurrencies = e => {
		const { value } = e.target
		if (e.target.name === 'from') {
			updateAvailableCurrenciesToExchange(value)
			setFrom(value)
		} else {
			updateAvailableCurrenciesBase(value)
			setTo(value)
		}
	}

	const handleAddTransaction = () => {
		setTransaction({
			name: transactionName,
			from,
			to,
			amount: transactionAmount,
			id: (Math.random()).toString()
		})
	}

	return (
		<div className='transaction-manager-container'>
			<BasicInput
				name='transaction-name'
				id='transaction-name'
				label='Transaction name'
				onChange={handleTransactionName}
				value={transactionName}
			/>
			<span>FROM</span>
			<BasicInput
				name='transaction-amount'
				id='transaction-amount'
				type='number'
				onChange={handleTransactionAmount}
				value={transactionAmount}
			/>
			<SelectCurrency
				name='from'
				options={availableCurrenciesBase}
				onChange={handleExchangeCurrencies}
				value={from}
			/>
			<span>TO</span>
			<ConvertedValue
				amount={transactionAmount}
				from={from}
				to={to}
			/>
			<SelectCurrency
				name='to'
				options={availableCurrenciesToExchange}
				onChange={handleExchangeCurrencies}
				value={to}
			/>
			<BasicButton onClick={handleAddTransaction}>
				Add transaction
			</BasicButton>
		</div>
	)
}

export default connect(null, actions)(TransactionManager)