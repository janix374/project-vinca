import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => (
	<Navbar bg='light' expand='lg' className='jubotron-class'>
		<Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='mr-auto'>
				<LinkContainer to='/'>
					<Nav.Link>Home</Nav.Link>
				</LinkContainer>
				<NavDropdown title='About' id='basic-nav-dropdown'>
					<LinkContainer to='/about/history'>
						<NavDropdown.Item>History</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/about/gallery'>
						<NavDropdown.Item>Gallery</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/about/documents'>
						<NavDropdown.Item>Documents</NavDropdown.Item>
					</LinkContainer>
					<LinkContainer to='/about/contact'>
						<NavDropdown.Item>Contact</NavDropdown.Item>
					</LinkContainer>
				</NavDropdown>
				<LinkContainer to='/members'>
					<Nav.Link>Members</Nav.Link>
				</LinkContainer>
				<LinkContainer to='/project'>
					<Nav.Link>Project</Nav.Link>
				</LinkContainer>
				<LinkContainer to='/publication'>
					<Nav.Link>Publication</Nav.Link>
				</LinkContainer>
				<LinkContainer to='/news'>
					<Nav.Link>News</Nav.Link>
				</LinkContainer>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Navigation;
