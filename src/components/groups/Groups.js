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
							<h3>Group for opto-biomedical engineering</h3>
							<p>description</p>
							<GroupsList
								data={teamMembers}
								teamName='Group_for_opto_biomedical_engineering'
							/>
						</Col>
					</Row>
				</Col>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>
								Group for investigation of complex systems in biology and
								physics
							</h3>
							<p>description</p>
							<GroupsList
								data={teamMembers}
								teamName='Group_for_investigation_of_complex_systems_in_biology_and_physics'
							/>
						</Col>
					</Row>
				</Col>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Group for photodynamic therapy development </h3>
							<p>description</p>
							<GroupsList
								data={teamMembers}
								teamName='Group_for_photodynamic_therapy_development'
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
export default Groups;
