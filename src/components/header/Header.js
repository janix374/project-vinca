import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Header = () => (
	<header>
		<Container>
			<Row>
				<Col xs={6} md={4}>
					<Image
						src={`${process.env.PUBLIC_URL}/assets/images/logo/logo.png`}
						rounded
						className='logoPhoton'
					/>
				</Col>
			</Row>
		</Container>
	</header>
);

export default Header;
