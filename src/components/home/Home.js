import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SliderComponent from './Slider/SliderComponent';

const Home = () => {
	const a = 'dddd';
	return (
		<Container fluid>
			{/* <Row>
				<Col>
					<SliderComponent />
				</Col>
			</Row> */}
			<Row>
				<Col className='homeComponent'>
					<h1>WELCOME TO COHERENCE PRESENTATION WEBPAGE!</h1>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
