import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMembers } from '../../store/actions/membersActions';
import MembersList from './MembersList';
import { selectAllMembers } from '../../store/selectors/selector';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';

const Members = () => {
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
		<Container className='members-container'>
			<Row>
				<Col xs={12} className='membersinstitution'>
					<h3>Vinča Institute of Nuclear Sciences</h3>
					<MembersList
						data={teamMembers}
						teamName='Vinca_Institute_of_Nuclear_Sciences'
					/>
				</Col>
				<Col xs={12} className='membersinstitution'>
					<h3>School of Electrical Engineering, University of Belgrade</h3>
					<MembersList
						data={teamMembers}
						teamName='School_of_Electrical_Engineering_University_of_Belgrade'
					/>
				</Col>
				<Col xs={12} className='membersinstitution'>
					<h3>Faculty of Sciences and Mathematics, University of Niš</h3>
					<MembersList
						data={teamMembers}
						teamName='Faculty_of_Sciences_and_Mathematics_University_of_Nis'
					/>
				</Col>
				<Col xs={12} className='membersinstitution'>
					<h3>
						Faculty of Science, Department for Chemistry, University of
						Kragujevac
					</h3>
					<MembersList
						data={teamMembers}
						teamName='Faculty_of_Science_Department_for_Chemistry_University_of_Kragujevac'
					/>
				</Col>
			</Row>
		</Container>
	);
};
export default Members;
