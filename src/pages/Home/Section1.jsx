import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Door from '../../assets/1.png';
import { Link } from 'react-router-dom';

function Section1() {
  return (
    <section className='hero-section'>
        <Container>
            <Row>
                <Col lg={7} className="mb-lg-5">
                    <div className="position-relative">
                        <img src={Door} className='img-fluid' alt="Door" />
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="hero-text text-center">
                        <h1 className='text-white'>Door Name</h1>
                        <h2 className='text-white'>Aluminium</h2>
                        <p className='text-white pt-2 pb-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ut nesciunt saepe voluptas blanditiis suscipit quaerat vel possimus voluptate atque inventore dolorem ab facilis optio perferendis. Ad dignissimos suscipit commodi.
                        </p>
                        <Link to="/" className="btn call_now">Call Now</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1;