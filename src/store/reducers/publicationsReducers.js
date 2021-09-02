import * as types from '../constants/actionTypes';

const INITIAL_STATE = {
	publications: [],
	loading: false,
	error: null,
};

const publicationsReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.GET_ALL_PUBLICATIONS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.GET_ALL_PUBLICATIONS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				publications: action.payload,
			};
		case types.GET_PUBLICATIONS_BY_YEAR_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				publicationsByYear: action.payload,
			};
		case types.GET_ALL_PUBLICATIONS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				publications: [],
			};
		default:
			return state;
	}
};

export default publicationsReducers;
