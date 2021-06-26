import * as types from '../constants/actionTypes';

const INITIAL_STATE = {
	projects: [],
	loading: false,
	error: null,
};

const projectsReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.GET_ALL_PROJECTS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.GET_ALL_PROJECTS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				projects: action.payload,
			};
		case types.GET_ALL_PROJECTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				projects: [],
			};
		default:
			return state;
	}
};

export default projectsReducers;
