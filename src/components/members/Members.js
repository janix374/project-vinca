import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMembers from './TeamMembers';

const Members = () => {
	const [teamMembers, setTeamMembers] = useState([]);
	const [errors, setErrors] = useState(false);

	const getData = async () => {
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
			setTeamMembers(members.members);
		} catch (error) {
			console.log('Error');
			setErrors(true);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Container>
			<Row>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Team A</h3>
							<p>description</p>
							<TeamMembers
								data={teamMembers}
								teamName='TeamA'
								errors={errors}
							/>
						</Col>
					</Row>
				</Col>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Team B</h3>
							<p>description</p>
							<TeamMembers
								data={teamMembers}
								teamName='TeamB'
								errors={errors}
							/>
						</Col>
					</Row>
				</Col>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Team C</h3>
							<p>description</p>
							<TeamMembers
								data={teamMembers}
								teamName='TeamC'
								errors={errors}
							/>
						</Col>
					</Row>
				</Col>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Team D</h3>
							<p>description</p>

							<TeamMembers
								data={teamMembers}
								teamName='TeamD'
								errors={errors}
							/>
						</Col>
					</Row>
				</Col>
				<Col sm={6} xs={12} className='mt-5'>
					<Row>
						<Col xs={12} className=''>
							<h3>Team E</h3>
							<p>description</p>

							<TeamMembers
								data={teamMembers}
								teamName='TeamE'
								errors={errors}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
export default Members;
