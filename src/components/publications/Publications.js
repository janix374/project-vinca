import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';
import { getAllPublications } from '../../store/actions/publicationsActions';
import { selectAllPublications } from '../../store/selectors/selector';

const Publications = () => {
	const dispatch = useDispatch();
	const { publications, loading, error } = useSelector(selectAllPublications);

	useEffect(() => {
		dispatch(getAllPublications());
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
		<Container className='publications-container'>
			<Row className='mt-5'>
				<Col xs={12}>
					<h3 className='text-center'>Publications</h3>
				</Col>
			</Row>
		</Container>
	);
};

export default Publications;
