import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MemberList from './MemberList';
import { getOneMember } from '../../store/actions/membersActions';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';

const Member = ({ match }) => {
	const matchId = match.params.memberId;
	const dispatch = useDispatch();
	const { member, loading, error } = useSelector((state) => state.members);

	useEffect(() => {
		dispatch(getOneMember(matchId));
	}, [dispatch]);

	if (error) {
		return <ErrorsMsg>Something went wrong!</ErrorsMsg>;
	}

	if (loading) {
		return <LoadingComponent />;
	}

	return (
		<Container>
			{member ? (
				<MemberList data={member} />
			) : (
				<Row>
					<Col>
						<h1 className='memberNotExist'>Member does not exist</h1>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default Member;
