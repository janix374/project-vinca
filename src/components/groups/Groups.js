import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMembers } from '../../store/actions/membersActions';
import GroupsList from './GroupsList';
import { selectAllMembers } from '../../store/selectors/selector';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';

const Groups = () => {
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
		<Container>
			<Row>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Vinča Institute of Nuclear Sciences</h3>
							<p>description</p>
							<GroupsList
								data={teamMembers}
								teamName='VincaInstituteOfNuclearSciences'
							/>
						</Col>
					</Row>
				</Col>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Team B</h3>
							<p>description</p>
							<GroupsList data={teamMembers} teamName='TeamB' />
						</Col>
					</Row>
				</Col>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Team C</h3>
							<p>description</p>
							<GroupsList data={teamMembers} teamName='TeamC' />
						</Col>
					</Row>
				</Col>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Visitors</h3>
							<p>description</p>
							<GroupsList data={teamMembers} teamName='Visitors' />
						</Col>
					</Row>
				</Col>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Collaborators</h3>
							<p>description</p>
							<GroupsList data={teamMembers} teamName='Collaborators' />
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
export default Groups;
