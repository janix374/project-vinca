import React from 'react';
import { Image } from 'react-bootstrap';

const SingleNewsUpcomingEvent = ({ news }) => {
	const dateObject = new Date(news.news_date);
	const day = dateObject.toLocaleString('en-US', { day: 'numeric' });
	const month = dateObject.toLocaleString('en-US', { month: 'long' });
	const year = dateObject.toLocaleString('en-US', { year: 'numeric' });
	return (
		<div className='single-news'>
			<h4>
				<Image
					src={`${process.env.PUBLIC_URL}/assets/images/logo/event.png`}
					className='upcoming-event'
					title={`upcoming  ${day}.${month}.${year}.`}
				/>{' '}
				<span>{news.news_title}</span>
			</h4>
			<p className='single-news-date'>
				{day}.{month}.{year}.
			</p>
			<p className='news-description'>{news.news_description} </p>
		</div>
	);
};

export default SingleNewsUpcomingEvent;
