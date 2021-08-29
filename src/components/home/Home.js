import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SliderComponent from './Slider/SliderComponent';
import CardVanilaEffect from '../common/vanilaeffect/CardVanilaEffect';

const Home = () => (
	<Container fluid className='home-component'>
		<Row className='mt-5'>
			<Col xs={12} className='mb-4'>
				{/* <p className='text-center'>
						WELCOME TO COHERENCE PRESENTATION WEBPAGE!
					</p> */}
			</Col>
			<Col xs={12} className='mb-4 for-vanila-effect'>
				<CardVanilaEffect />
			</Col>
		</Row>
	</Container>
);

export default Home;
