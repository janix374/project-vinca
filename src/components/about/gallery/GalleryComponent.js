import React, { useState } from 'react';
import ModelGallery from './ModelGallery';

const GalleryComponent = ({ images }) => {
	const [model, setModel] = useState(false);
	const [tempImgSrc, setTempImgSrc] = useState('imageh.jpg');
	const getImg = (imgSrc) => {
		setTempImgSrc(imgSrc);
		setModel(true);
	};
	const handleClose = () => {
		setModel(false);
	};
	return (
		<>
			<ModelGallery
				model={model}
				tempImgSrc={tempImgSrc}
				handleClose={handleClose}
			/>
			<div className='gallery-all'>
				{images.map((item) => (
					<div
						key={item.id}
						className='gallery-pics'
						onClick={() => getImg(item.name)}
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
