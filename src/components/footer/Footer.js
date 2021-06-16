import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
	const a = 'cao';
	return (
		<footer>
			<Container className='footer-container'>
				<Row>
					<Col xs={12} sm={5}>
						<div className='footer-contact'>
							<p>
								Mike Petrovića Alasa 12-14, 11351 Belgrade, Serbia <br />
								Tel. +381 11 2455 272 <br />
								E-mail. goran79@vin.bg.ac.rs
							</p>
						</div>
					</Col>
					<Col xs={12} sm={7}>
						<div className='footer-list-container'>
							<Row>
								<Col xs={12} sm={4} className='footer-list mb-3'>
									<p>MEMBERS</p>
									<ul className='list-group'>
										<li>
											<Link to='/members'>Members</Link>
										</li>
									</ul>
								</Col>
								<Col xs={12} sm={6} className='footer-list mb-3'>
									<p>GROUPS</p>
									<ul className='list-group'>
										<li>
											<Link to='/groups/optobiomedical'>
												Opto-biomedical engineering
											</Link>
										</li>
										<li>
											<Link to='/groups/biologyandphysics'>
												Investigation of complex systems in biology and physics
											</Link>
										</li>
										<li>
											<Link to='/groups/photodynamictherapy'>
												Photodynamic therapy development
											</Link>
										</li>
									</ul>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
