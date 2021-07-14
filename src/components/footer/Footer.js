import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Perfooter from './Perfooter';

function Footer() {
	return (
		<footer>
			<Perfooter />
			<Container className='footer-container'>
				<Row>
					<Col xs={12} sm={4}>
						<div className='footer-contact'>
							<p>
								Mike Petrovića Alasa 12-14, 11351 Belgrade, Serbia <br />
								Tel. +381 11 2455 272 <br />
								E-mail. coherence@vin.bg.ac.rs
							</p>
						</div>
					</Col>
					<Col xs={12} sm={8}>
						<div className='footer-list-container'>
							<Row>
								<Col sm={12} md={6} className='footer-list mb-3'>
									<p>MORE INFORMATION</p>
									<ul className='list-group'>
										<li>
											<Link to='/about/center'>Center</Link>
										</li>
										<li>
											<Link to='/about/institutions'>Partners</Link>
										</li>
										<li>
											<Link to='/about/collaborators'>Collaborators</Link>
										</li>
										<li>
											<Link to='/projects'>Projects</Link>
										</li>
										<li>
											<Link to='/news'>News</Link>
										</li>
									</ul>
								</Col>
								<Col sm={12} md={6} className='footer-list mb-3'>
									<p>TEAM MEMBERS</p>
									<ul className='list-group'>
										<li>
											<Link to='/members'>All members</Link>
										</li>
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
