import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardVanilaEffect from '../common/vanilaeffect/CardVanilaEffect';

const Center = () => {
	console.log('sss');
	return (
		<Container className='centar-container'>
			<Row className='mt-5'>
				<Col>
					<p className='text-justify'>
						Establishment of the COHERENCE Center (Center for light-based
						research and technologies) stemmed from the need for associates to
						unite resources, exchange and connect knowledge, skills and
						experiences and thus raise quality and clearer directions of
						research, in which light is used. Center COHERENCE is an
						interdisciplinary research center gathering researchers from
						different scientific fields: physics, chemistry, photonics,
						biomedicine and engineering sharing the same interest and goal -
						<span className='center-component-goals'>
							achieving excellence in scientific research in physics, chemistry,
							biomedicine and optobiomedical engineering based on the
							application of light.
						</span>
					</p>
					<p>
						The COHERENCE Center will achieve its goal by connecting research
						teams from four institutions:
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className='centerInstitution'>
						<ul
							style={{
								listStyleImage: `url(${process.env.PUBLIC_URL}/assets/images/logo/play_black.png)`,
							}}
						>
							<li>
								<a
									href='https://www.vin.bg.ac.rs/en/'
									target='_blank'
									rel='noreferrer'
								>
									Vinča Institute of Nuclear Sciences, National Institute of the
									Republic of Serbia{' '}
								</a>
							</li>
							<li>
								<a
									href='https://www.etf.bg.ac.rs/en#gsc.tab=0'
									target='_blank'
									rel='noreferrer'
								>
									School of Electrical Engineering, University of Belgrade{' '}
								</a>
							</li>
							<li>
								<a
									href='https://www.ni.ac.rs/en/faculties/faculty-of-sciences-and-mathematics'
									target='_blank'
									rel='noreferrer'
								>
									Faculty of Sciences and Mathematics, University of Niš{' '}
								</a>
							</li>
							<li>
								<a
									href='http://chem.pmf.kg.ac.rs '
									target='_blank'
									rel='noreferrer'
								>
									Department of Chemistry, Faculty of Science, University of
									Kragujevac{' '}
								</a>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
			<Row className='mt-5'>
				<Col sm={12} md={6} className='text-justify centerOurMission'>
					<CardVanilaEffect
						title='OUR MISSION'
						text='To connect groups and institutions involved
					in different aspects of the application of light in scientific fields
					and disciplines, to improve and accelerate process of innovation and
					application of research results using comprehensive multidisciplinary
					approach.'
					/>
				</Col>
				<Col sm={12} md={6} className='text-justify centerOurMission'>
					<CardVanilaEffect
						title='OUR VISION'
						text='To become the leading center for the
						application of light in various areas of scientific work in the region
						and recognizable in the European research area.'
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Center;
