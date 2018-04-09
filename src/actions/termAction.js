import * as types from './actionTypes';

export function loadTerm(term) {
	return {
		type: types.LOAD_TERM_SUCCESS,
		term
	};
}

