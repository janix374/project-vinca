import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SliderComponent from './Slider/SliderComponent';

const Home = () => {
	const a = 'dddd';
	return (
		<Container fluid className='home-component'>
			{/* <Row>
				<Col>
					<SliderComponent />
				</Col>
			</Row> */}
			<Row className='mt-5'>
				<Col xs={12} className='mb-4'>
					<p className='text-center'>
						WELCOME TO COHERENCE PRESENTATION WEBPAGE!
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
