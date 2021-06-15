import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Navigation from './NavigationComponent';

const Header = () => (
	<header>
		<Container fluid>
			<Row>
				<Col xs={6} md={4}>
					<Image
						src={`${process.env.PUBLIC_URL}/assets/images/logo/logo.png`}
						rounded
						className='logoPhoton'
					/>
				</Col>
			</Row>
			<Row>
				<Navigation />
			</Row>
		</Container>
	</header>
);

export default Header;
