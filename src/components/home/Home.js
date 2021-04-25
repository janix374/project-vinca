import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SliderComponent from './Slider/SliderComponent';

const Home = () => {
	const a = 'dddd';
	return (
		<Container fluid>
			<Row>
				<Col>
					<SliderComponent />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
