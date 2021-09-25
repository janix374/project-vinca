import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SliderComponent from './Slider/SliderComponent';
import CardVanilaEffect from '../common/vanilaeffect/CardVanilaEffect';
import useNewsSortHooks from '../../customHooks/useNewsSortHooks';
import UpcomingNews from './UpcomingNews';

const Home = () => {
	const { loading, error, upcominEvent } = useNewsSortHooks();
	return (
		<Container fluid className='home-component'>
			<Row className='mt-5'>
				<Col xs={12} className='mb-4 for-vanila-effect' />
				<Col xs={12} className='mb-4 for-vanila-effect'>
					<CardVanilaEffect />
				</Col>
			</Row>
			<Row className='home-component-intro'>
				<Col xs={12}>
					<p className='text-center'>
						COHERENCE is an interdisciplinary research center gathering
						researchers from different scientific fields: physics, chemistry,
						photonics, biomedicine and engineering sharing the same interest and
						goal
					</p>
				</Col>
			</Row>
			<Row className='home-component-events'>
				<Col xs={12}>
					{upcominEvent.length > 0 ? (
						<>
							<h5 className='text-center'>Upcoming Events</h5>
							{upcominEvent.map((item) => (
								<div key={item.id}>
									<UpcomingNews upcominEvent={item} />
								</div>
							))}
						</>
					) : (
						''
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
