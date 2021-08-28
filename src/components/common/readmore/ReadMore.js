import React, { useState } from 'react';
import plus from '../../../img/plus.png';
import negative from '../../../img/negative.png';

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	if (text.length > 500) {
		return (
			<>
				{isReadMore ? `${text.slice(0, 500)}...` : text}
				<span onClick={toggleReadMore} className='read-or-hide'>
					{isReadMore ? (
						<img src={plus} alt='read more' />
					) : (
						<img src={negative} alt='show less' />
					)}
				</span>
			</>
		);
	}
	return <>{text}</>;
};

export default ReadMore;
