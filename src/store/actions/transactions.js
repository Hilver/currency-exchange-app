import {SET_TRANSACTION, DELETE_TRANSACTION} from './types'

export default {
	setTransaction: data => ({
		type: SET_TRANSACTION,
		payload: data
	}),
	deleteTransaction: id => ({
		type: DELETE_TRANSACTION,
		payload: id
	})
}