import * as types from '../constants/actionTypes';

export const getAllCollaborators = () => async (dispatch) => {
	dispatch({ type: types.GET_ALL_COLLABORATORS_REQUEST });
	try {
		const data = await fetch(
			`${process.env.PUBLIC_URL}/db/collaboratorsDB.json`,
			{
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		);
		const collaborators = await data.json();
		dispatch({
			type: types.GET_ALL_COLLABORATORS_SUCCESS,
			payload: collaborators,
		});
	} catch (error) {
		dispatch({ type: types.GET_ALL_COLLABORATORS_FAILURE, error });
	}
};
