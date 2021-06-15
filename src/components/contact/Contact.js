import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import GoogleMapIframe from './GoogleMapIframe';

const Contact = () => {
	const a = 'cao';
	return (
		<Container>
			<Row className='mt-5 mb-5'>
				<Col className='contact-text'>
					<p>
						<span>Institution:</span> Vinča Institute of Nuclear Sciences,
						Laboratory for Atomic Physics
					</p>
					<p>
						<span>
							<Image
								src={`${process.env.PUBLIC_URL}/assets/images/logo/telephone.png`}
								rounded
								className='telephone-img-icon'
							/>
						</span>{' '}
						+381 11 2455 272
					</p>
					<p>
						<span>
							{' '}
							<Image
								src={`${process.env.PUBLIC_URL}/assets/images/logo/email.png`}
								rounded
								className='email-img-icon'
							/>
						</span>
						goran79@vin.bg.ac.rs
					</p>
					<p>
						<span>
							<Image
								src={`${process.env.PUBLIC_URL}/assets/images/logo/house.png`}
								rounded
								className='house-img-icon'
							/>
						</span>{' '}
						Mike Petrovića Alasa 12-14, 11351 Belgrade, Serbia
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<GoogleMapIframe />
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
