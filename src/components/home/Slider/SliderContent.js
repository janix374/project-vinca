import React from 'react';

const SliderContent = (props) => (
	<div>
		{props.images.map((slide, index) => (
			<div
				key={index}
				className={index === props.activeIndex ? 'slides active' : 'inactive'}
			>
				<img
					className='slide_image'
					src={`${process.env.PUBLIC_URL}/assets/images/galleries/${slide.name}`}
					alt={`${slide.title}`}
				/>
			</div>
		))}
	</div>
);

export default SliderContent;
