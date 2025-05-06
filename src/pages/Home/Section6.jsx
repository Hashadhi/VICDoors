import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Section6 = () => {
  return (
    <>
    <section className='contact-section'>
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                    <h4>We Guarantee</h4>
                    <h2>The Best Quality</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus a, quod dolorem minima, illo ex rerum, ab eligendi voluptatum in voluptates ipsum alias? Ex doloremque velit nihil id ad.
                    </p>
                    <Link to="/" className="btn btn-red px-4 py-2 rounded-3">
                    Call 0450-184-482
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section6;