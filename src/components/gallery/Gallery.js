import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPictures } from '../../store/actions/galleryActions';
import { selectGalleries } from '../../store/selectors/selector';
import GalleryComponent from './GalleryComponent';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';

const Gallery = () => {
	const dispatch = useDispatch();
	const { pictures, loading, error } = useSelector(selectGalleries);

	useEffect(() => {
		dispatch(getAllPictures());
	}, [dispatch]);

	if (error) {
		return (
			<ErrorsMsg>
				<h2>Something went wrong!</h2>
			</ErrorsMsg>
		);
	}

	if (loading) {
		return <LoadingComponent />;
	}

	return (
		<Container className='gallery-container'>
			<Row className='mt-5'>
				<Col xs={12}>
					<h3 className='text-center'>Gallery</h3>
				</Col>
				<Col xs={12}>
					{pictures.images && pictures.images.length ? (
						<GalleryComponent images={pictures.images} />
					) : (
						''
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default Gallery;
