import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFoundPage = () => (
	<Container fluid>
		<Row>
			<Col className='pagenotfound'>
				<h3>Page Not Found!</h3>
			</Col>
		</Row>
	</Container>
);

export default NotFoundPage;
