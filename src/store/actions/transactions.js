import {SET_TRANSACTION} from './types'

export default {
	setTransaction: data => ({
		type: SET_TRANSACTION,
		payload: data
	})
}