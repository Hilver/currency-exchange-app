export default function convertToDecimal (num, min, step) {
	const isNum = value => typeof value === 'number' ? true : false
	const areArgsNums = [...arguments].every(isNum)
	if (!areArgsNums) {
		throw new Error('All parameters should be numbers!')
	}
	return num <= min ? (step || min) : parseFloat(Number(num).toFixed(2))
}