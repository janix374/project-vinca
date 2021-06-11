import * as types from '../constants/actionTypes';

export const getAllPictures = () => async (dispatch) => {
	dispatch({ type: types.GET_ALL_PICTURES_REQUEST });
	try {
		const data = await fetch(`${process.env.PUBLIC_URL}/db/gallery.json`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const pictures = await data.json();
		dispatch({ type: types.GET_ALL_PICTURES_SUCCESS, payload: pictures });
	} catch (error) {
		dispatch({ type: types.GET_ALL_PICTURES_FAILURE, error });
	}
};
