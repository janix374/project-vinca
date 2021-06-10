import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => (
	<Navbar expand='lg' className='jubotron-class'>
		<Navbar.Brand href='/'>COHERENCE</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='mr-auto'>
				<LinkContainer to='/'>
					<Nav.Link>Home</Nav.Link>
				</LinkContainer>
				<NavDropdown title='About' id='basic-nav-dropdown'>
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
					<Nav.Link>Members</Nav.Link>
				</LinkContainer>
				<LinkContainer to='/groups'>
					<Nav.Link>Groups</Nav.Link>
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
