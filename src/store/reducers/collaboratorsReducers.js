import * as types from '../constants/actionTypes';

const INITIAL_STATE = {
	collaborators: [],
	loading: false,
	error: null,
};

const collaboratorsReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.GET_ALL_COLLABORATORS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.GET_ALL_COLLABORATORS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				collaborators: action.payload,
			};
		case types.GET_ALL_COLLABORATORS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				collaborators: [],
			};
		default:
			return state;
	}
};

export default collaboratorsReducers;
