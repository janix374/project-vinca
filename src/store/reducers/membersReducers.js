import * as types from '../constants/actionTypes';

const INITIAL_STATE = {
	members: [],
	loading: false,
	error: null,
};

const membersReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.GET_ALL_MEMBERS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case types.GET_ALL_MEMBERS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				members: action.payload,
			};
		case types.GET_ONE_MEMBER_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				member: action.payload,
			};
		case types.GET_ALL_MEMBERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
				members: [],
			};
		default:
			return state;
	}
};

export default membersReducers;
