import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Navigation from './NavigationComponent';

const Header = () => (
	<header>
		<Container fluid>
			<Row style={{ zIndex: 1090 }}>
				<Navigation />
			</Row>
		</Container>
	</header>
);

export default Header;
