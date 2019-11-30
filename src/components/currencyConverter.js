import React, {useState} from 'react'
import { connect } from 'react-redux'

import SelectCurrency from './inputs/selectCurrency'
import BasicInput from './inputs/utils/basicInput'
import * as actions from '../store/actions/index'
import dataCurrencies from '../data/currencies'
import './currencyConverter.sass'

const CurrencyConverter = props => {
	// eslint-disable-next-line react/prop-types
	const {setBaseCurrency, setValueCurrency} = props // these props goes from redux actions
	const [base, setBase] = useState('EURO')
	const [currency, setCurrency] = useState('PLN')
	const [currencyValue, setCurrencyValue] = useState()
	const [availableCurrencies, setAvailableCurrencies] = useState({
		currenciesBase: dataCurrencies,
		currenciesToExchange: dataCurrencies
	})

	const handleCurrencies = e =>	{
		const {value} = e.target
		const updatedDataCurrencies = dataCurrencies.filter(el => el.currency !== value)
		if (e.target.name === 'convertFROM') {
			setBaseCurrency(value)
			setBase(value)
			setAvailableCurrencies({
				...availableCurrencies,
				currenciesToExchange: updatedDataCurrencies
			})
		} else {
			setCurrency(value)
			setAvailableCurrencies({
				...availableCurrencies,
				currenciesBase: updatedDataCurrencies
			})
		}
	}
	const handleCurrencyValue = e => {
		setValueCurrency(base, currency, Number(e.target.value))
		setCurrencyValue(Number(e.target.value))
	}

	return (
		<div className='currency-converter-container'>
			<div className='currency-converter-box'>
				1x <SelectCurrency
					name='convertFROM'
					options={availableCurrencies.currenciesBase}
					onChange={handleCurrencies}
					value={base}
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
					options={availableCurrencies.currenciesToExchange}
					onChange={handleCurrencies}
					value={currency}
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