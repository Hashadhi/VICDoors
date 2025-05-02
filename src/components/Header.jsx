import React, { useState, useEffect, useRef } from 'react'
import "../styles/HeaderStyle.css";
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_.png';

const Header = () => {

  const [nav, setNav] = useState(false);
  const prevScrollPos = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const difference = prevScrollPos.current - currentScrollPos;
      difference > 0.8 ? setNav(true) : setNav(false);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



// scroll Navbar
// const changeValueOnScroll = () => {
  // const scrollValue = document?.documentElement?.scrollTop;
  // scrollValue > 100 ? setNav(true) : setNav(false);

  
// }



// window.addEventListener("scroll", changeValueOnScroll);



  return (
    <header >
     <Navbar collapseOnSelect expand="lg" className={`${nav === true? "sticky" : "hidden"}`}>
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
  </header>
  );
};

export default Header;