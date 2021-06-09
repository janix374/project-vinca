import * as types from '../constants/actionTypes';

export const getAllMembers = () => async (dispatch) => {
	dispatch({ type: types.GET_ALL_MEMBERS_REQUEST });
	try {
		const data = await fetch(`${process.env.PUBLIC_URL}/db/teamMembers.json`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const members = await data.json();
		dispatch({ type: types.GET_ALL_MEMBERS_SUCCESS, payload: members });
	} catch (error) {
		dispatch({ type: types.GET_ALL_MEMBERS_FAILURE, error });
	}
};

export const getOneMember = (id) => async (dispatch) => {
	dispatch({ type: types.GET_ALL_MEMBERS_REQUEST });
	try {
		const data = await fetch(`${process.env.PUBLIC_URL}/db/teamMembers.json`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const members = await data.json();
		const member = members.members.find((item) => item.id === Number(id));
		dispatch({ type: types.GET_ONE_MEMBER_SUCCESS, payload: member });
	} catch (error) {
		dispatch({ type: types.GET_ALL_MEMBERS_FAILURE, error });
	}
};
