import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Material from "../../assets/2.png";
import Design from "../../assets/3.png";
import Durability from "../../assets/4.png";

const mockdata =[
    {
        image: Material,
        title: "Material",
        paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos qui error suscipit sit! A aperiam quam impedit aliquid amet, repellendus fugit sed" 
    },
    {
        image: Design,
        title: "Design",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quod? Perspiciatis distinctio recusandae, nisi reprehenderit quas nobis"
    },
    {
        image: Durability,
        title: "Durability",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio facere suscipit provident porro quis obcaecati amet nisi consectetur eius in"
    }
]

const Section2 = () => {
  return (
    <>
    <section className='about-section'>
        <Container>
            <Row>
                <Col lg={{span: 8, offset: 2}} className="text-center">
                    <h2>The burger tastes better when you eat it with your family</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore soluta, hic in eos explicabo voluptates reiciendis ullam rerum omnis itaque, similique deleniti eaque cumque, placeat quasi? Exercitationem facere impedit sequi?</p>
                    <Link to="/" className="btn call_now btn_red">
                        Explore Full Menu
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>

    <section className='about-wrapper'>
        <Container>
            <Row className="justify-content-md-center">
            {mockdata.map((cardData, index) => (
            <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about-box text-center">
                    <div className="about-icon">
                        <img src={cardData.image} className='"img-fluid' alt="icon" />
                    </div>
                    <h4>{cardData.title}</h4>
                    <p>{cardData.paragraph}</p>
                </div>
            </Col>
        ))}
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section2;