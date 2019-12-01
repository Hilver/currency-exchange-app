import {SET_TRANSACTION} from '../actions/types'

const initialState = []

function manageTransactions (state = initialState, action) {
	switch (action.type) {
	case SET_TRANSACTION: {
		let newState = [...state]
		newState.push(action.payload)
		return newState
	}
	default:
		return state
	}
}

export default manageTransactions