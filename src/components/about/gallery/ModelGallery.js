import React from 'react';

const ModelGallery = (props) => {
	const { model, tempImgSrc, handleClose } = props;
	return (
		<div className={model ? 'model-gallery open-model' : 'model-gallery'}>
			<span className='close-image' onClick={handleClose}>
				&#10006;
			</span>
			<img
				src={`${process.env.PUBLIC_URL}/assets/images/galleries/${tempImgSrc}`}
				alt='gallery'
			/>
		</div>
	);
};
export default ModelGallery;
