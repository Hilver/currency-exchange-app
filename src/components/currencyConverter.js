/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { connect } from 'react-redux'

import SelectCurrency from './inputs/selectCurrency'
import BasicInput from './inputs/utils/basicInput'
import './currencyConverter.sass'
import * as actions from '../store/actions/index'

const currenciesFROM = [
	{
		currency: 'EURO'
	},
	{
		currency: 'PLN'
	}
]

const currenciesTO = [{
	currency: 'Polish Zloty',
	id: 'PLN'
}]

const CurrencyConverter = props => {
	// eslint-disable-next-line react/prop-types
	const {setBaseCurrency, setValueCurrency} = props // these props goes from redux actions
	const [base, setBase] = useState('EURO')
	const [currency, setCurrency] = useState('PLN')
	const [currencyValue, setCurrencyValue] = useState()

	const handleCurrency = e =>	{
		setCurrency(e.target.value)
	}
	const handleCurrencyValue = e => {
		setValueCurrency(base, currency, Number(e.target.value))
		setCurrencyValue(Number(e.target.value))
	}
	const handleBaseCurrency = e => {
		setBaseCurrency(e.target.value)
		setBase(e.target.value)
	}

	return (
		<div className='currency-converter-container'>
			<div className='currency-converter-box'>
				1x <SelectCurrency
					name='convertFROM'
					options={currenciesFROM}
					onChange={handleBaseCurrency}
				/>
			</div>
			<div className='currency-converter-box'>
				<div className='currency-converter-input'>
					<BasicInput
						id='currency'
						name='currency'
						type='number'
						onChange={handleCurrencyValue}
						value={currencyValue}
					/>
				</div>
				<SelectCurrency
					name='convertTO'
					options={currenciesTO}
					onChange={handleCurrency}
				/>
			</div>
		</div>
	)
}

function mapStateToProps (state) {
	return {
		currencies: state.currencies
	}
}

export default connect(mapStateToProps, actions)(CurrencyConverter)