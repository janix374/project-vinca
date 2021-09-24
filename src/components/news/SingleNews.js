import React from 'react';
import { Image } from 'react-bootstrap';

const SingleNews = ({ news }) => {
	const dateObject = new Date(news.news_date);
	const day = dateObject.toLocaleString('en-US', { day: 'numeric' });
	const month = dateObject.toLocaleString('en-US', { month: 'long' });
	const year = dateObject.toLocaleString('en-US', { year: 'numeric' });
	return (
		<div className='single-news'>
			<h4>
				<Image
					src={`${process.env.PUBLIC_URL}/assets/images/logo/news.png`}
					className='image-class'
					title='NEWS'
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

export default SingleNews;
