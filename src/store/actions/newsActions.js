import * as types from '../constants/actionTypes';

export const getAllNews = () => async (dispatch) => {
	dispatch({ type: types.GET_ALL_NEWS_REQUEST });
	try {
		const data = await fetch(`${process.env.PUBLIC_URL}/db/newsDB.json`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const news = await data.json();
		dispatch({ type: types.GET_ALL_NEWS_SUCCESS, payload: news });
	} catch (error) {
		dispatch({ type: types.GET_ALL_NEWS_FAILURE, error });
	}
};
