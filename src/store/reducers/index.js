import { combineReducers } from 'redux';
import membersReducers from './membersReducers';

const rootReducer = combineReducers({
	members: membersReducers,
});

export default rootReducer;
