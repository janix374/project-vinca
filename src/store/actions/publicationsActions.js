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
		const publications = await data.json();
		dispatch({
			type: types.GET_ALL_PUBLICATIONS_SUCCESS,
			payload: publications,
		});
	} catch (error) {
		dispatch({ type: types.GET_ALL_PUBLICATIONS_FAILURE, error });
	}
};

export const getAllPublicationsByYear = (year) => async (dispatch) => {
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

		const publications = await data.json();
		const publicationsByYear = publications.publications.find(
			(item) => item.year === year
		);
		dispatch({
			type: types.GET_PUBLICATIONS_BY_YEAR_SUCCESS,
			payload: publicationsByYear,
		});
	} catch (error) {
		dispatch({ type: types.GET_ALL_PUBLICATIONS_FAILURE, error });
	}
};
