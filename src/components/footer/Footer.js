import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
	const a = 'cao';
	return (
		<footer>
			<Container>
				<Row>
					<Col xs={12}>
						<p>footer</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
