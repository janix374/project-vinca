import * as types from '../constants/actionTypes';

export const getAllProjects = () => async (dispatch) => {
	dispatch({ type: types.GET_ALL_PROJECTS_REQUEST });
	try {
		const data = await fetch(`${process.env.PUBLIC_URL}/db/projectsDB.json`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const projects = await data.json();
		dispatch({ type: types.GET_ALL_PROJECTS_SUCCESS, payload: projects });
	} catch (error) {
		dispatch({ type: types.GET_ALL_PROJECTS_FAILURE, error });
	}
};
