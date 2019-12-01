import React, {useState} from 'react'
import { connect } from 'react-redux'

import SelectCurrency from './inputs/selectCurrency'
import CurrencyConverterInput from './inputs/currencyConverterInput'
import useCurrenciesList from '../utils/useCurrenciesList'
import decimalNum from '../utils/convertToDecimalNumber'
import * as actions from '../store/actions/index'
import './currencyConverter.sass'

const CurrencyConverter = props => {
	// eslint-disable-next-line react/prop-types
	const {setBaseCurrency, setValueCurrency} = props // these props goes from redux actions
	const [base, setBase] = useState('EURO')
	const [currency, setCurrency] = useState('PLN')
	const [currencyValue, setCurrencyValue] = useState(1.00)
	const {
		availableCurrenciesBase,
		availableCurrenciesToExchange,
		updateAvailableCurrenciesBase,
		updateAvailableCurrenciesToExchange
	} = useCurrenciesList()

	const handleCurrencies = e =>	{
		const {value} = e.target
		if (e.target.name === 'convertFROM') {
			setBaseCurrency(value)
			setBase(value)
			updateAvailableCurrenciesToExchange(value)
		} else {
			setCurrency(value)
			updateAvailableCurrenciesBase(value)
		}
	}
	const handleCurrencyValue = e => {
		setValueCurrency(base, currency, decimalNum(Number(e.target.value), 0, 0.01))
		setCurrencyValue(decimalNum(Number(e.target.value), 0, 0.01))
	}

	return (
		<div className='currency-converter-container'>
			<div className='currency-converter-box'>
				1x <SelectCurrency
					name='convertFROM'
					options={availableCurrenciesBase}
					onChange={handleCurrencies}
					value={base}
				/>
			</div>
			<div className='currency-converter-box'>
				<div className='currency-converter-input'>
					<CurrencyConverterInput
						onChange={handleCurrencyValue}
						value={currencyValue}
					/>
				</div>
				<SelectCurrency
					name='convertTO'
					options={availableCurrenciesToExchange}
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