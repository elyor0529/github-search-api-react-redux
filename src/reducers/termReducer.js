import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.term, action) {
	switch (action.type) {
		case types.LOAD_TERM_SUCCESS: {
			return action.term;
		}
		default:
			return state;
	}
}
