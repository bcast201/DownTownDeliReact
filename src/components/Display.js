import React from 'react'
import { Container, Row, Col } from 'reactstrap';


function Display() {
    return (
            <Container className='displayContainer'>
                <Row>
                    <Col md={6}>
                        <img className='img-responsive displayImage img-fluid' alt='sandwich' src="/Assets/large2.jpg"/>
                    </Col>
                    <Col md={6} className='displayFlex'>
                    <div className='taglineContainer'>
                        <p className='tagline'>Quality Meat</p>
                        <p className='tagline'> Quality Cheeses</p>
                        <p className='tagline'> NO BALONEY!!</p>
                        <p className='tagline'> Sliced Fresh Every time!!</p>
                    </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default Display;