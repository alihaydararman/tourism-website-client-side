import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const LocationGallery = () => {
    return (
        <div className='doctor-gallery container'>
            <Container>
                <h1 className='bg-danger text-light'>Our Tourism Place</h1>
                <Row>
                    <Col xs={12} md={4}>
                        <img src="https://i.ibb.co/XxZFw4G/1.jpg" alt="" roudded />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://i.ibb.co/1XHTKy4/2.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://i.ibb.co/Fz01NfK/3.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://i.ibb.co/j8MRBw8/4.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://i.ibb.co/gdZvxJx/5.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://i.ibb.co/ZJCNXbF/6.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://i.ibb.co/7n8FmQ8/7.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://i.ibb.co/C11HTqm/8.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://i.ibb.co/4YQgLM0/9.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LocationGallery;