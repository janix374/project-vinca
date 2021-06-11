import { combineReducers } from 'redux';
import membersReducers from './membersReducers';
import galleryReducers from './galleryReducers';

const rootReducer = combineReducers({
	members: membersReducers,
	galleries: galleryReducers,
});

export default rootReducer;
