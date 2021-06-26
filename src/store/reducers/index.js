import { combineReducers } from 'redux';
import membersReducers from './membersReducers';
import galleryReducers from './galleryReducers';
import newsReducers from './newsReducers';
import projectsReducers from './projectsReducers';
import collaboratorsReducers from './collaboratorsReducers';

const rootReducer = combineReducers({
	members: membersReducers,
	galleries: galleryReducers,
	news: newsReducers,
	projects: projectsReducers,
	collaborators: collaboratorsReducers,
});

export default rootReducer;
