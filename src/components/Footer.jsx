import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Location</h5>
              <p>2 Middlin Street</p>
              <p>Brown Hill</p>
              <p>Victoria</p>
              <p>Australia</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Working Hours</h5>
              <p>Mon-Fri: 9:00AM - 6:00PM</p>
              <p>saturday: 10:00AM - 6:00PM</p>
              <p>Sunday: 12:00PM - 5:00PM</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Order Now</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <p>
                <Link to="tel:0450184482" className='calling'>0450-184-482</Link>
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Follow Us</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <ul className='list-unstyled text-center mt-2'>
                <li><Link to="/"><i className="bi bi-facebook"></i></Link></li>
                <li><Link to="/"><i className='bi bi-twitter'></i></Link></li>
                <li><Link to="/"><i className='bi bi-instagram'></i></Link></li>
                <li><Link to="/"><i className='bi bi-youtube'></i></Link></li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className='copy-right'>
          <Col>
            <div>
              <ul className='list-unstyled text-center mb-0'>
                <li><Link to="/">© 2025 <span>VIC Doors</span>. All Rights Reserved</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Terms of Use</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;