import React, { useState } from 'react';

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	if (text.length > 150) {
		return (
			<>
				{isReadMore ? `${text.slice(0, 150)}...` : text}
				<span onClick={toggleReadMore} className='read-or-hide'>
					{isReadMore ? 'read more' : ' show less'}
				</span>
			</>
		);
	}
	return <>{text}</>;
};

export default ReadMore;
