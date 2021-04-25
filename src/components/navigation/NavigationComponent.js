import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => (
	<Navbar bg='light' expand='lg' className='jubotron-class'>
		<Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='mr-auto'>
				<Nav.Link href='/'>Home</Nav.Link>
				<NavDropdown title='About' id='basic-nav-dropdown'>
					<NavDropdown.Item href='/about/history'>History</NavDropdown.Item>
					<NavDropdown.Item href='/about/gallery'>Gallery</NavDropdown.Item>
					<NavDropdown.Item href='/about/documents'>Documents</NavDropdown.Item>
					<NavDropdown.Item href='/about/contact'>Contact</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href='/members'>Members</Nav.Link>
				<Nav.Link href='/project'>Project</Nav.Link>
				<Nav.Link href='/publication'>Publication</Nav.Link>
				<Nav.Link href='/news'>News</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Navigation;
