import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {FaEnvelope, FaMapMarkerAlt, FaPhone} from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const ContactPage = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <h2>Contact Us</h2>
                    <Row className="mb-4">
                        <Col sm={12} md={4}>
                            <Card className="contact-card">
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <FaPhone size={30}/>
                                    <div className="mt-3">
                                        <a href="tel:+1234567890">+1234567890</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={4}>
                            <Card className="contact-card">
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <FaEnvelope size={30}/>
                                    <div className="mt-3">
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={4}>
                            <Card className="contact-card">
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <FaMapMarkerAlt size={30}/>
                                    <div className="mt-3">
                                        123 Example St,<br/> City, Country
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Map/>
                </Col>
                <Col md={6}>
                    <ContactForm/>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;

