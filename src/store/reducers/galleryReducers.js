import * as types from '../constants/actionTypes';

const INITIAL_STATE = {
	pictures: [],
	loading: false,
	error: null,
};

const galleryReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.GET_ALL_PICTURES_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.GET_ALL_PICTURES_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				pictures: action.payload,
			};
		case types.GET_ALL_PICTURES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				pictures: [],
			};
		default:
			return state;
	}
};

export default galleryReducers;
