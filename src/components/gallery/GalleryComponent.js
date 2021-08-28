import React, { useState } from 'react';
import ModelGallery from './ModelGallery';

const GalleryComponent = ({ images }) => {
	const [model, setModel] = useState(false);
	const [tempImgSrc, setTempImgSrc] = useState('');
	const [activeIndex, setActiveIndex] = useState(0);

	const handleGetImg = (index) => {
		setActiveIndex(index);
		setModel(true);
		setTempImgSrc(index);
	};
	const handleClose = () => {
		setModel(false);
	};

	const len = images.length - 1;

	const prevImg = () => {
		setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
	};

	const nextImg = () => {
		setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
	};
	return (
		<>
			<ModelGallery
				model={model}
				images={images}
				handleClose={handleClose}
				activeIndex={activeIndex}
				imgSorce={tempImgSrc}
				prevImg={prevImg}
				nextImg={nextImg}
			/>
			<div className='gallery-container-all-pictures'>
				{images.map((item, index) => (
					<div
						key={item.id}
						className='gallery-frame'
						onClick={() => handleGetImg(index)}
					>
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/galleries/${item.name}`}
							alt={item.name}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default GalleryComponent;
