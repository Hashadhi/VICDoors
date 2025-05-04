import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import door1 from '../../assets/4.png';
import door2 from '../../assets/5.png';
import door3 from '../../assets/6.png';
import door4 from '../../assets/7.png';
import door5 from '../../assets/8.png';
import door6 from '../../assets/9.png';
import door7 from '../../assets/10.png';
import door8 from '../../assets/11.png';
import door9 from '../../assets/12.png';
import door10 from '../../assets/13.png';
import Cards from '../../components/Cards';

// Mock Data
const collection = [
    {
        id: "001",
        image: door1,
        title: "Aluminium Door",
        paragraph: "This is a beutiful aluminium door with a fancy design"
    },
    {
        id: "002",
        image: door2,
        title: "Oak Door",
        paragraph: "This is a beutiful Oak door with a fancy design"
    },
    {
        id: "003",
        image: door3,
        title: "Iron Door",
        paragraph: "This is a beutiful iron door with a fancy design"
    },{
        id: "004",
        image: door4,
        title: "Wooden Door",
        paragraph: "This is a beutiful wooden door with a fancy design"
    },{
        id: "005",
        image: door5,
        title: "Aluminium Door",
        paragraph: "This is a beutiful aluminium door with a fancy design"
    },{
        id: "006",
        image: door6,
        title: "Iron Door",
        paragraph: "This is a beutiful Iron door with a fancy design"
    },{
        id: "007",
        image: door7,
        title: "Wooden Door",
        paragraph: "This is a beutiful wooden door with a fancy design"
    },{
        id: "008",
        image: door8,
        title: "Oak Door",
        paragraph: "This is a beutiful Oak door with a fancy design"
    },{
        id: "009",
        image: door9,
        title: "Teak Door",
        paragraph: "This is a beutiful Teak door with a fancy design"
    },{
        id: "010",
        image: door10,
        title: "Tungsten Door",
        paragraph: "This is a beutiful Tungsten door with a fancy design"
    }
];

const Section3 = () => {
  return (
    <section className='menu'>
        <Container>
            <Row>
                <Col lg={{span: 8, offset: 2}} className="text-center mb-2 pt-5">
                    <h2>Our Collection</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime, alias excepturi fugiat aliquid laboriosam nisi quas ul
                    </p>
                </Col>
            </Row>
            <Row>
                {collection.map((door, index) => (
                    <Cards 
                    key={index}
                    image={door.image}
                    title={door.title}
                    paragraph={door.paragraph} /> 

                ))}
            </Row>
        </Container>
    </section>
  )
}

export default Section3;