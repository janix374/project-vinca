import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => (
	<Navbar
		collapseOnSelect
		expand='lg'
		className='navbar-component'
		variant='dark'
	>
		<Navbar.Brand href='/'>COHERENCE</Navbar.Brand>
		<Navbar.Toggle aria-controls='responsive-navbar-nav' />
		<Navbar.Collapse>
			<Nav>
				<LinkContainer to='/'>
					<Nav.Link>HOME</Nav.Link>
				</LinkContainer>
				<NavDropdown title='ABOUT'>
					<LinkContainer to='/about/center'>
						<NavDropdown.Item>Center</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/about/institutions'>
						<NavDropdown.Item>Partner institutions</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/about/collaborators'>
						<NavDropdown.Item>Collaborators</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/about/gallery'>
						<NavDropdown.Item variant='dark'>Gallery</NavDropdown.Item>
					</LinkContainer>
				</NavDropdown>
				<LinkContainer to='/members'>
					<Nav.Link>MEMBERS</Nav.Link>
				</LinkContainer>
				<NavDropdown title='GROUPS'>
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
				<LinkContainer to='/projects'>
					<Nav.Link>PROJECTS</Nav.Link>
				</LinkContainer>
				<LinkContainer to='/news'>
					<Nav.Link>NEWS</Nav.Link>
				</LinkContainer>
				<LinkContainer to='/contact'>
					<Nav.Link>CONTACT</Nav.Link>
				</LinkContainer>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Navigation;
