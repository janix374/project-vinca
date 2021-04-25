import React from 'react';

const Dots = (props) => (
	<div className='slide_all_dots'>
		{props.images.map((slide, index) => (
			<span
				key={index}
				className={`${props.activeIndex === index ? 'dot active-dot' : 'dot'}`}
				onClick={(event) => props.onclick((event.target.value = index))}
			/>
		))}
	</div>
);

export default Dots;
