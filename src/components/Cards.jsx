import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cards({image, title, paragraph}) {
  return (
    <Col sm={6} lg={4} xl={3}>
        <Card className='overflow-hidden mb-4'>
            <div className="overflow-hidden">
                <Card.Img variant='top' src={image} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{paragraph}</Card.Text>

                <div className="d-flex align-items-center justify-content-between">
                    <div className="whitelist">
                        <i className="bi bi-heart-fill"></i>
                    </div>
                    <div className="view-more">
                        <Link to="/"> View More  
                        <i className="bi bi-chevron-double-right"></i>
                        </Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </Col>
  );
};

export default Cards;