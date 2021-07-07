import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => (
	<Navbar collapseOnSelect expand='lg' className='navbar-component'>
		<Navbar.Brand href='/'>
			<Image
				src={`${process.env.PUBLIC_URL}/assets/images/logo/logo_temp.png`}
				rounded
				className='logoPhoton'
			/>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='responsive-navbar-nav' />
		<Navbar.Collapse>
			<Nav>
				<LinkContainer to='/'>
					<Nav.Link>Home</Nav.Link>
				</LinkContainer>
				<NavDropdown title='About'>
					<LinkContainer to='/about/center'>
						<NavDropdown.Item>Center</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/about/institutions'>
						<NavDropdown.Item>Partner institutions</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/about/collaborators'>
						<NavDropdown.Item>Collaborators</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/about/laboratories'>
						<NavDropdown.Item>Laboratories</NavDropdown.Item>
					</LinkContainer>
				</NavDropdown>
				<LinkContainer to='/members'>
					<Nav.Link>Members</Nav.Link>
				</LinkContainer>
				<NavDropdown title='Groups'>
					<LinkContainer to='/groups/optobiomedical'>
						<NavDropdown.Item>Opto-biomedical engineering</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/groups/biologyandphysics'>
						<NavDropdown.Item>
							Investigation of complex systems in biology and physics
						</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/groups/photodynamictherapy'>
						<NavDropdown.Item>
							Photodynamic therapy development
						</NavDropdown.Item>
					</LinkContainer>
				</NavDropdown>
				<LinkContainer to='/gallery'>
					<Nav.Link>Gallery</Nav.Link>
				</LinkContainer>
				<LinkContainer to='/projects'>
					<Nav.Link>Projects</Nav.Link>
				</LinkContainer>
				<LinkContainer to='/news'>
					<Nav.Link>News</Nav.Link>
				</LinkContainer>
				<LinkContainer to='/contact'>
					<Nav.Link>Contact</Nav.Link>
				</LinkContainer>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Navigation;
