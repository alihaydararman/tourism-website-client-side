import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const LocationGallery = () => {
    return (
        <div className='doctor-gallery container'>
            <Container>
                <h1 className='bg-danger text-light'>Our Tourism Place</h1>
                <Row>
                    <Col xs={12} md={4}>
                        <img src="https://i.ytimg.com/vi/ssU0VFliS9g/maxresdefault.jpg" alt="" roudded />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://dailyasianage.com/library/2019/09/28/1569705652_5.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://live.staticflickr.com/569/20626643544_fd696cfdcd_b.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://i.ytimg.com/vi/mQRGWyYaylI/hqdefault.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/0f/1f/82/mohamaya-lake-mirsarai.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/y8eC0WBzPEEVyKIGGjcM3zKIgirEYLTLvioF3GaP.jpeg" alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src="https://media-eng.dhakatribune.com/uploads/2018/08/bandarban-r-1533379196498.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LocationGallery;