import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMember from './TeamMember';

const Member = ({ match }) => {
	const matchId = match.params.memberId;
	const [teamMember, setTeamMember] = useState({});
	const [errors, setErrors] = useState(false);

	const getDataOne = async () => {
		try {
			const data = await fetch(
				`${process.env.PUBLIC_URL}/db/teamMembers.json`,
				{
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				}
			);
			const members = await data.json();
			const member = members.members.find(
				(item) => item.id === Number(matchId)
			);
			if (member) {
				setTeamMember(member);
			}
		} catch (error) {
			console.log('Error');
			// console.error(error);
			setErrors(true);
		}
	};

	useEffect(() => {
		getDataOne();
	}, []);

	if (errors) {
		return (
			<Container>
				<Row>
					<Col>
						<h1 className='memberNotExist'>
							Something went wrong, try again later
						</h1>
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<Container>
			{Object.keys(teamMember).length > 0 ? (
				<TeamMember data={teamMember} />
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
