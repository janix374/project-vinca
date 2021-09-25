import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../store/actions/newsActions';
import { selectAllNews } from '../store/selectors/selector';

const useNewsSortHooks = () => {
	const dispatch = useDispatch();
	const { news, loading, error } = useSelector(selectAllNews);

	useEffect(() => {
		dispatch(getAllNews());
	}, [dispatch]);

	const upcominEventReverse = [];
	const pastEvent = [];
	if (news.news) {
		const eventsObjects = news.news.map((item) => {
			const dateString = item.news_date.split('.');
			const stringForParcing = `${dateString[2]}-${dateString[1]}-${dateString[0]}`;
			return { ...item, news_date: Date.parse(stringForParcing) };
		});

		const newArray = eventsObjects.sort((a, b) =>
			// eslint-disable-next-line no-nested-ternary
			a.news_date > b.news_date ? -1 : b.news_date > a.news_date ? 1 : 0
		);

		const events = newArray.forEach((element) => {
			if (element.news_date > Date.now()) {
				upcominEventReverse.push(element);
			} else {
				pastEvent.push(element);
			}
		});
	}
	const upcominEvent = upcominEventReverse.reverse();

	return { news, loading, error, upcominEvent, pastEvent };
};

export default useNewsSortHooks;
