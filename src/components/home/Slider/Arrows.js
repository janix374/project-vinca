import React from 'react';

const Arrows = (props) => (
	<div className='slider_arrows'>
		<span className='slide_prev' onClick={props.prevSlide}>
			&#10094;
		</span>
		<span className='slide_next' onClick={props.nextSlide}>
			&#10095;
		</span>
	</div>
);

export default Arrows;
