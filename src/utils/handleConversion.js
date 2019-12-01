import toDecimal from './convertToDecimalNumber'

export default (currencies, amount, from, to) => {
	const [getCurrency] = currencies.filter(currency => currency.base === from)
	return toDecimal(getCurrency.currencyRates[to] * amount)
}