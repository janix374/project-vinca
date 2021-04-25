import React from 'react';
import { Image, Row, Col, ListGroup } from 'react-bootstrap';

const TeamMember = ({ data }) => {
	const a = 'dd';
	return (
		<div className='teamMemberContainer'>
			<Row className='mb-4'>
				<Col xs={12}>
					<h2>{data.name}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={12} sm={6}>
					<Image
						className='personImg'
						src={`${process.env.PUBLIC_URL}/assets/images/personal_image/avatar.png`}
						fluid
					/>
				</Col>
				<Col xs={12} sm={6}>
					<h4>{data.job_title}</h4>
					<p>Tel: {data.tel}</p>
					<p>Fax: {data.fax}</p>
					<p>Email: {data.email}</p>
				</Col>
			</Row>
			<Row className='mt-5 mb-5'>
				<Col>
					<h4>Research Interest</h4>
					<ListGroup variant='flush'>
						{data.research_interest.map((element) => (
							<ListGroup.Item
								key={element}
								className='list-group-item list-group-item-action list-group-item-light'
							>
								{element}
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>
			<Row className='mt-5 mb-5'>
				<Col>
					<h4>Professional Positions</h4>
					<ListGroup variant='flush'>
						{data.professional_positions.map((element) => (
							<ListGroup.Item
								key={element}
								className='list-group-item list-group-item-action list-group-item-light'
							>
								{element}
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>
			<Row className='mt-5 mb-5'>
				<Col>
					<h4>Education</h4>
					<ListGroup variant='flush'>
						{data.education.map((element) => (
							<ListGroup.Item
								key={element}
								className='list-group-item list-group-item-action list-group-item-light'
							>
								{element}
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>
			<Row>
				<a
					href={`/assets/pdf/cv/${data.cv}`}
					className='btn btn-info btn-lg active buttonPDFTeamMember'
					role='button'
					aria-pressed='true'
					target='_blank'
					rel='noreferrer'
				>
					cv
				</a>
				<a
					href={`/assets/pdf/publications/${data.publications}`}
					className='btn btn-info btn-lg active buttonPDFTeamMember'
					role='button'
					aria-pressed='true'
					target='_blank'
					rel='noreferrer'
				>
					publications
				</a>
			</Row>
		</div>
	);
};

export default TeamMember;
