import React from 'react'
import "../styles/HeaderStyle.css";
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_.png';

function Header() {
  return (
    <div className='header'>
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Logo" className='img-fluid' />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/free_quote">Free Quote</Nav.Link>
            <Nav.Link as={Link} to="/call_us">Call Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
};

export default Header;