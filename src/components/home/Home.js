import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CardVanilaEffect from '../common/vanilaeffect/CardVanilaEffect';
import useNewsSortHooks from '../../customHooks/useNewsSortHooks';
import UpcomingNews from './UpcomingNews';

const Home = () => {
	const { upcominEvent } = useNewsSortHooks();
	return (
		<Container fluid className='home-component'>
			<Row className='mt-5 home-component-welcome'>
				<Col>
					<h3 className='text-center'>Welcome to COHERENCE web presentation</h3>
				</Col>
			</Row>
			<Row className='mt-5 mb-4 for-vanila-effect'>
				<Col xs={12}>
					<CardVanilaEffect />
				</Col>
			</Row>
			<Row className='home-component-intro'>
				<Col xs={12}>
					<div>
						<p className='text-justify'>
							COHERENCE is an interdisciplinary research center gathering
							researchers from different scientific fields: physics, chemistry,
							photonics, biomedicine and engineering sharing the same interest
							and goal
						</p>
					</div>
					<div className='text-center'>
						<Image
							src={`${process.env.PUBLIC_URL}/assets/images/logo/physics.png`}
							title='physics'
						/>
						<Image
							src={`${process.env.PUBLIC_URL}/assets/images/logo/chemistry.png`}
							title='chemistry'
						/>
						<Image
							src={`${process.env.PUBLIC_URL}/assets/images/logo/biomedicine.png`}
							title='biomedicine'
						/>
						<Image
							src={`${process.env.PUBLIC_URL}/assets/images/logo/atom.png`}
							title='photonics'
						/>
					</div>
				</Col>
			</Row>
			<Row className='home-component-events'>
				<Col xs={12}>
					{upcominEvent.length > 0 ? (
						<>
							<h5 className='text-center'>Upcoming News and Events</h5>
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
