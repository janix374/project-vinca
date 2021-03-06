import * as types from '../constants/actionTypes';

const INITIAL_STATE = {
	news: [],
	loading: false,
	error: null,
};

const newsReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.GET_ALL_NEWS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.GET_ALL_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				news: action.payload,
			};
		case types.GET_ALL_NEWS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				news: [],
			};
		default:
			return state;
	}
};

export default newsReducers;
