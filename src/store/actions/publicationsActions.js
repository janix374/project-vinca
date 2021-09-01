import * as types from '../constants/actionTypes';

export const getAllPublications = () => async (dispatch) => {
	dispatch({ type: types.GET_ALL_PUBLICATIONS_REQUEST });
	try {
		const data = await fetch(
			`${process.env.PUBLIC_URL}/db/publicationsDB.json`,
			{
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		);
		const projects = await data.json();
		dispatch({ type: types.GET_ALL_PUBLICATIONS_SUCCESS, payload: projects });
	} catch (error) {
		dispatch({ type: types.GET_ALL_PUBLICATIONS_FAILURE, error });
	}
};
