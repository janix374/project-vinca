import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Laboratories = () => (
	<Container className='laboratories'>
		<Row className='mt-5 laboratories-show mb-5'>
			<h4>
				Center has four equipped laboratories, three of which are located in INN
				&quot;Vinča&quot; and one at the Faculty of Natural Sciences and
				Mathematics, University of Kragujevac.
			</h4>
		</Row>
		<Row className='mt-5 laboratories-show mb-5'>
			<Col xs={12}>
				<h5>1. Optical laboratory (lab manager Dr. Milutin Stepić)</h5>
				<p className='text-justify mt-3 mb-3'>
					The optical laboratory (established in 2008.) is the oldest laboratory
					of the Center situated in INN &quot;Vinča&quot;. The equipment from
					this laboratory is used by associates of all three groups of the
					Center for research: optical waveguides and localized structures,
					fiber-based optical sensors, the influence of coherent and incoherent
					light sources on nanocomposite systems in the fight against cancer,
					but also for promotional activities and student internship.
				</p>
			</Col>
			<Col xs={12} className='text-center laboratories-picture'>
				<Image
					src={`${process.env.PUBLIC_URL}/assets/images/galleries/image2.jpg`}
					fluid
				/>
			</Col>
		</Row>
		<Row className='mt-5 laboratories-show mb-5'>
			<Col xl={12}>
				<h5>2. Biochemical laboratory (lab manager Dr. Maja Nešić)</h5>
				<p className='text-justify mt-3 mb-3' />
			</Col>
			<Col xs={12} className='text-center laboratories-picture'>
				<Image
					src={`${process.env.PUBLIC_URL}/assets/images/galleries/image10.jpg`}
					fluid
				/>
			</Col>
		</Row>
		<Row className='mt-5 laboratories-show mb-5'>
			<Col md={12}>
				<h5>
					3. Laboratory for biomedical engineering (lab manager Dr. Marija
					Ivanović)
				</h5>
				<p className='text-justify mt-3 mb-3' />
			</Col>
			<Col xs={12} className='text-center laboratories-picture'>
				<Image
					src={`${process.env.PUBLIC_URL}/assets/images/galleries/image1.jpg`}
					fluid
				/>
			</Col>
		</Row>
		<Row className='mt-5 laboratories-show mb-5'>
			<Col md={12}>
				<h5>
					4. Laboratory for complex (specimen) preparation and characterization
					(lab manager Dr. Biljana Petrović)
				</h5>
				<p className='text-justify mt-3 mb-3' />
			</Col>
			<Col xs={12} className='text-center laboratories-picture'>
				<Image
					src={`${process.env.PUBLIC_URL}/assets/images/galleries/image11.jpg`}
					fluid
				/>
			</Col>
		</Row>
	</Container>
);

export default Laboratories;
