import {SET_TRANSACTION, DELETE_TRANSACTION} from '../actions/types'

const initialState = []

function manageTransactions (state = initialState, action) {
	switch (action.type) {
	case SET_TRANSACTION: {
		let newState = [...state]
		newState.push(action.payload)
		return newState
	}
	case DELETE_TRANSACTION: {
		return state.filter(transaction => transaction.id !== action.payload)
	}
	default:
		return state
	}
}

export default manageTransactions