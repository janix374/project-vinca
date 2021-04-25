import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';

const SliderComponent = (props) => {
	const [images, setImages] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [errors, setErrors] = useState(false);

	const getSliderImage = async () => {
		try {
			const data = await fetch(
				`${process.env.PUBLIC_URL}/db/gallerySlider.json`,
				{
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				}
			);
			const gallerySlider = await data.json();
			setImages(gallerySlider.images);
		} catch (error) {
			setErrors(true);
		}
	};

	const len = images.length - 1;

	useEffect(() => {
		getSliderImage();
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
		}, 8000);
		return () => clearInterval(interval);
	}, [activeIndex]);

	if (errors) {
		return <div className='slider_container_error' />;
	}

	return (
		<div className='slider_container'>
			<SliderContent images={images} activeIndex={activeIndex} />
			<Arrows
				prevSlide={() =>
					setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
				}
				nextSlide={() =>
					setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
				}
			/>
			<Dots
				images={images}
				activeIndex={activeIndex}
				// eslint-disable-next-line no-shadow
				onclick={(activeIndex) => setActiveIndex(activeIndex)}
			/>
		</div>
	);
};

export default SliderComponent;
