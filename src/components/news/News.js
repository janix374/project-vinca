import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';
import SingleNews from './SingleNews';
import SingleNewsUpcomingEvent from './SingleNewsUpcomingEvent';
import { getAllNews } from '../../store/actions/newsActions';
import { selectAllNews } from '../../store/selectors/selector';

const News = () => {
	const dispatch = useDispatch();
	const { news, loading, error } = useSelector(selectAllNews);

	useEffect(() => {
		dispatch(getAllNews());
	}, [dispatch]);

	if (error) {
		return (
			<ErrorsMsg>
				<h2>Something went wrong!</h2>
			</ErrorsMsg>
		);
	}

	if (loading) {
		return <LoadingComponent />;
	}

	const upcominEvent = [];
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
				upcominEvent.push(element);
			} else {
				pastEvent.push(element);
			}
		});
	}

	return (
		<Container className='news-container'>
			{upcominEvent.length > 0 ? (
				<Row className='mt-5'>
					<Col>
						<h4 className='text-center upcoming-event-text'>Upcoming Events</h4>
					</Col>
					{upcominEvent.map((item) => (
						<Col key={item.news_id} sm={12}>
							<SingleNewsUpcomingEvent news={item} />
						</Col>
					))}
				</Row>
			) : (
				''
			)}

			<Row className='mt-5'>
				<Col>
					<h4 className='text-center'>News</h4>
				</Col>
				{pastEvent &&
					pastEvent.map((item) => (
						<Col key={item.news_id} sm={12}>
							<SingleNews news={item} />
						</Col>
					))}
			</Row>
		</Container>
	);
};
export default News;
