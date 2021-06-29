import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMembers } from '../../store/actions/membersActions';
import GroupsList from './GroupsList';
import { selectAllMembers } from '../../store/selectors/selector';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';

const Groups = ({ teamName, title, description }) => {
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
			<Row className='mt-5'>
				<Col xs={12}>
					<h3 className='mb-3'>{title}</h3>
					<p className='mt-3'>{description}</p>
					<Row>
						<Col xs={12} sm={2} md={3} />
						<Col xs={12} sm={8} md={6}>
							<GroupsList data={teamMembers} teamName={teamName} />
						</Col>
						<Col xs={12} sm={2} md={3} />
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
export default Groups;
