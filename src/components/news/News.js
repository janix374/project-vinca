import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';
import SingleNews from './SingleNews';
import useNewsSortHooks from '../../customHooks/useNewsSortHooks';

const News = () => {
	const { news, loading, error, upcominEvent, pastEvent } = useNewsSortHooks();

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

	return (
		<Container className='news-container'>
			{upcominEvent.length > 0 ? (
				<Row className='mt-5'>
					<Col>
						<h4 className='text-center upcoming-event-text'>Upcoming Events</h4>
					</Col>
					{upcominEvent.map((item) => (
						<Col key={item.news_id} sm={12}>
							<SingleNews
								news={item}
								extension='event.png'
								classForSingleNewsImage='upcoming-event'
							/>
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
							<SingleNews news={item} extension='news.png' />
						</Col>
					))}
			</Row>
		</Container>
	);
};
export default News;
