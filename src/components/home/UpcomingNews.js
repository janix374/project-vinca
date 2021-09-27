import React from 'react';
import { Link } from 'react-router-dom';

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
				<Link to='/news'>
					<p>{upcominEvent.news_title}</p>
				</Link>
				<p>
					{day}.{month}.{year}.{' '}
				</p>
			</div>
		</div>
	);
};

export default UpcomingNews;
