import React from 'react';
import { Image, Row, Col, ListGroup, Button } from 'react-bootstrap';
import ButtonLink from '../common/buttons/ButtonLink';
import ButtonAction from '../common/buttons/ButtonAction';

const MemberList = ({ data, handleGoBack }) => {
	const a = 'cao';
	return (
		<div className='team-member-container'>
			<Row className='mb-4'>
				<Col xs={12}>
					<h2>{data.name}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={12} sm={6}>
					<div className='person-img-container'>
						<Image
							className='person-img'
							src={`${process.env.PUBLIC_URL}/assets/images/personal_image/${data.photo}`}
							fluid
						/>
					</div>
				</Col>
				<Col xs={12} sm={6}>
					<h4>{data.job_title}</h4>
					{data.tel && <p>Tel: {data.tel}</p>}
					{data.fax && <p>Fax: {data.fax}</p>}
					{data.email && <p>Email: {data.email}</p>}
					{data.personal_url && (
						<a
							href={`${data.personal_url}`}
							target='_blank'
							rel='noreferrer'
							className='btn btn-info btn-lg active button-PDF-team-member'
							role='button'
							aria-pressed='true'
						>
							personal link
						</a>
					)}
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
				<Col xs={12}>
					<div className='buttons-for-member'>
						<div className='buttons-items-for-member'>
							{data.cv && (
								<ButtonLink
									title='resume'
									link={`${process.env.PUBLIC_URL}/assets/pdf/cv/${data.cv}`}
								/>
							)}
						</div>
						<div className='buttons-items-for-member'>
							{data.publications && (
								<ButtonLink title='publications' link={data.publications} />
							)}
						</div>
						<div className='buttons-items-for-member'>
							<ButtonAction title='go back' handleClick={handleGoBack} />
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default MemberList;
