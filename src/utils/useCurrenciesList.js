// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import dataCurrencies from '../data/currencies'

const useCurrenciesList = () => {
	const [availableCurrenciesBase, setAvailableCurrenciesBase] = useState(dataCurrencies)
	const [availableCurrenciesToExchange, setAvailableCurrenciesToExchange] = useState(dataCurrencies)

	const updateAvailableCurrenciesBase = currency => setAvailableCurrenciesBase(dataCurrencies.filter(el => el.currency !== currency))
	const updateAvailableCurrenciesToExchange = currency => setAvailableCurrenciesToExchange(dataCurrencies.filter(el => el.currency !== currency))

	return {
		availableCurrenciesBase,
		availableCurrenciesToExchange,
		updateAvailableCurrenciesBase,
		updateAvailableCurrenciesToExchange
	}
}

export default useCurrenciesList