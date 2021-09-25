import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const UpcomingNews = ({ upcominEvent }) => {
	const dateObject = new Date(upcominEvent.news_date);
	const day = dateObject.toLocaleString('en-US', { day: 'numeric' });
	const month = dateObject.toLocaleString('en-US', { month: 'long' });
	const year = dateObject.toLocaleString('en-US', { year: 'numeric' });
	return (
		<div className='home-upcoming-news'>
			<div className='home-upcoming-news-date'>
				<p>{day}</p>
				<p>{month}</p>
			</div>
			<div className='home-upcoming-news-title'>
				<p>{upcominEvent.news_title}</p>
				<p>
					{day}.{month}.{year}.{' '}
				</p>
			</div>
		</div>
	);
};

export default UpcomingNews;
