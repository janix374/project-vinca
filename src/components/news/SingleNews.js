import React from 'react';

const SingleNews = ({ news }) => (
	<div className='single-news'>
		<h4>{news.news_title}</h4>
		<p className='single-news-date'>{news.news_date}</p>
		<p>{news.news_description}</p>
	</div>
);

export default SingleNews;
