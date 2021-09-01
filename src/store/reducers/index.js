import { combineReducers } from 'redux';
import membersReducers from './membersReducers';
import galleryReducers from './galleryReducers';
import newsReducers from './newsReducers';
import projectsReducers from './projectsReducers';
import collaboratorsReducers from './collaboratorsReducers';
import publicationsReducers from './publicationsReducers';

const rootReducer = combineReducers({
	members: membersReducers,
	galleries: galleryReducers,
	news: newsReducers,
	projects: projectsReducers,
	collaborators: collaboratorsReducers,
	publications: publicationsReducers,
});

export default rootReducer;
