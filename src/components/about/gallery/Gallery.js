import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GalleryComponent from './GalleryComponent';

const Gallery = () => {
	const [images, setImages] = useState([]);
	const [errors, setErrors] = useState(false);

	const getGalleryImage = async () => {
		try {
			const data = await fetch(`${process.env.PUBLIC_URL}/db/gallery.json`, {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});
			const gallerySlider = await data.json();
			setImages(gallerySlider.images);
		} catch (error) {
			setErrors(true);
		}
	};

	useEffect(() => {
		getGalleryImage();
	}, []);

	if (errors) {
		return (
			<Container>
				<Row>
					<Col>something went wrong</Col>
				</Row>
			</Container>
		);
	}

	return (
		<Container>
			<Row>
				<Col>
					<GalleryComponent images={images} />
				</Col>
			</Row>
		</Container>
	);
};

export default Gallery;
