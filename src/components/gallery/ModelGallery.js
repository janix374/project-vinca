import React from 'react';

const ModelGallery = (props) => {
	const { model, images, handleClose, activeIndex, prevImg, nextImg } = props;

	return (
		<div className={model ? 'model-gallery open-model' : 'model-gallery'}>
			<div className='close_image_container'>
				<span className='close_image' onClick={handleClose}>
					&#10006;
				</span>
			</div>
			{images.map((item, index) => (
				<div
					key={item.id}
					className={
						index === activeIndex
							? 'model-gallery-img active-model-img'
							: 'inactive-model-img'
					}
				>
					<div className='model-gallery-img-text'>{item.description}</div>
					<img
						src={`${process.env.PUBLIC_URL}/assets/images/galleries/${item.name}`}
						alt='gallery'
					/>
				</div>
			))}
			<div className='slider_arrows'>
				<span className='slide_prev' onClick={prevImg}>
					&#10094;
				</span>
				<span className='slide_next' onClick={nextImg}>
					&#10095;
				</span>
			</div>
		</div>
	);
};
export default ModelGallery;
