import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMembers } from '../../store/actions/membersActions';
import GroupsList from './GroupsList';
import { selectAllMembers } from '../../store/selectors/selector';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';

const Groups = ({ teamName, title, description, picture }) => {
	const dispatch = useDispatch();
	const { members: teamMembers, loading, error } = useSelector(
		selectAllMembers
	);

	useEffect(() => {
		dispatch(getAllMembers());
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
		<Container className='groups-component'>
			<Row className='groups-border'>
				<Col xs={12}>
					<h3 className='mb-3'>{title}</h3>
					<p className='mt-3 text-justify'>{description}</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12} sm={6} className='groups-picture'>
					<div>
						<Image src={picture} fluid />
						<p>{title}</p>
					</div>
				</Col>
				<Col xs={12} sm={(6, { order: 'first' })}>
					<GroupsList data={teamMembers} teamName={teamName} />
				</Col>
			</Row>
		</Container>
	);
};
export default Groups;
