import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Collaborators = () => {
	const a = 'sss';
	return (
		<Container>
			<Row className='mt-5'>
				<Col xs={12}>
					<p>
						The success of the Center&apos;s associates is reflected in their
						ability to establish and nurture long-term collaborations that have
						resulted in: joint patents and works in peer-reviewed international
						journals, joint projects, professional training of young researchers
						in partner institutions, joint organization of international
						gatherings and other related activities that all contribute
						long-term sustainability of the Center of Excellence.
					</p>
				</Col>
				<Col xs={12}>
					<p>List of collaborators:</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Collaborators;
