import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomActive from '../CustomActive/CustomActive';
import './Header.css'






const Header = () => {
  const[user] =useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth);
  }
 
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky='top' className='nav-menu' variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><b id='website-name'>Faisal's StudyPoint</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
            </Nav>
            <Nav>
              <Nav.Link as={CustomActive} to="/home"><span>Home</span></Nav.Link>
              <Nav.Link as={CustomActive} to="/blogs"><span>Blogs</span></Nav.Link>
              <Nav.Link as={CustomActive} to="/about"><span>About</span></Nav.Link>
              
              {
              user?
              <button className='btn btn-link  text-white text-decoration-none' onClick={handleSignOut}><span>Log Out</span></button> 
              :<Nav.Link as={Link} to='/login'>
                <span>Login</span>
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;