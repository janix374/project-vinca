import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MemberList from './MemberList';
import { getOneMember } from '../../store/actions/membersActions';
import ErrorsMsg from '../common/ErrorsMsg';
import LoadingComponent from '../common/LoadingComponent';

const Member = ({ match }) => {
	const matchId = match.params.memberId;
	const history = useHistory();
	const dispatch = useDispatch();
	const { member, loading, error } = useSelector((state) => state.members);

	useEffect(() => {
		dispatch(getOneMember(matchId));
	}, [dispatch]);

	const handleGoBack = () => {
		if (history.length > 1) {
			history.goBack();
		}
		history.push('/');
	};

	if (error) {
		return <ErrorsMsg>Something went wrong!</ErrorsMsg>;
	}

	if (loading) {
		return <LoadingComponent />;
	}

	return (
		<Container className='member-container'>
			{member ? (
				<MemberList data={member} handleGoBack={handleGoBack} />
			) : (
				<Row>
					<Col>
						<h1 className='member-not-exist'>Member does not exist</h1>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default Member;
