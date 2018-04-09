import { combineReducers } from 'redux';

import repos from './reposReducer';
import term from './termReducer';

const rootReducer = combineReducers({
	repos,
	term
});

export default rootReducer;
