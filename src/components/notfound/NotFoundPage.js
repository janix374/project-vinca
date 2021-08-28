import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFoundPage = () => (
	<Container fluid>
		<Row>
			<Col className='pagenotfound'>
				<p>404</p>
				<p>Page Not Found!</p>
			</Col>
		</Row>
	</Container>
);

export default NotFoundPage;
