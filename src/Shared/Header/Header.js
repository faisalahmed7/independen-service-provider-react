import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

import { Link } from 'react-router-dom';




const Header = () => {
 
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky='top' className='nav-menu' variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><b id='website-name'>Faisal's Tutoring Service</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/home"><span>Home</span></Nav.Link>
              <Nav.Link href="home#services"><span>Services</span></Nav.Link>
              <Nav.Link as={Link} to="/about"><span>About</span></Nav.Link>
              <Nav.Link as={Link} to="/blogs"><span>Blogs</span></Nav.Link>
              <Nav.Link as={Link} to='/login'>
                <span>Login</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;