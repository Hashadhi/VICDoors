import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import slide1 from '../../assets/14.png';
import slide2 from '../../assets/15.png';
import slide3 from '../../assets/16.png';
import slide4 from '../../assets/17.png';
import slide5 from '../../assets/18.png';
import slide6 from '../../assets/19.png';
import slide7 from '../../assets/20.png';
import slide8 from '../../assets/21.png';

const Section5 = () => {
  return (
   <section className='brand-section'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Carousel.Caption>
          <div className='d-flex align-items-center justify-content-between'>
            <div className="door-img">
              <img src={slide1} className="img-fluid" alt="door-1" />
            </div>
            <div className="door-img">
              <img src={slide2} className="img-fluid" alt="door-2" />
            </div>
            <div className="door-img">
              <img src={slide3} className="img-fluid" alt="door-3" />
            </div>
            <div className="door-img">
              <img src={slide4} className="img-fluid" alt="door-4" />
            </div>
            <div className="door-img">
              <img src={slide5} className="img-fluid" alt="door-5" />
            </div>
            <div className="door-img">
              <img src={slide6} className="img-fluid" alt="door-6" />
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <div className='d-flex align-items-center justify-content-around'>
            <div className="door-img">
              <img src={slide3} className="img-fluid" alt="door-3" />
            </div>
            <div className="door-img">
              <img src={slide4} className="img-fluid" alt="door-4" />
            </div>
            <div className="door-img">
              <img src={slide5} className="img-fluid" alt="door-5" />
            </div>
            <div className="door-img">
              <img src={slide6} className="img-fluid" alt="door-6" />
            </div>
            <div className="door-img">
              <img src={slide7} className="img-fluid" alt="door-7" />
            </div>
            <div className="door-img">
              <img src={slide8} className="img-fluid" alt="door-8" />
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </section>
  )
}

export default Section5;