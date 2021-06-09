import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Center = () => {
	const a = 'sss';
	return (
		<Container>
			<Row className='mt-5'>
				<Col>
					<p>
						Establishment of the COHERENCE Center (Center for light-based
						research and technologies) stemmed from the need for associates to
						unite resources, exchange and connect knowledge, skills and
						experiences and thus raise quality and clearer directions of
						research, in which light is used. Center COHERENCE is an
						interdisciplinary research center gathering researchers from
						different scientific fields: physics, chemistry, photonics,
						biomedicine and engineering sharing the same interest and goal -
						<span className='text-info'>
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
					<p>
						The COHERENCE Center will achieve its goal by connecting research
						teams from four institutions:
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Center;
