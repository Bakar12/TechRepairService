import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <h2>Contact Us</h2>
                    <p>Our address, phone, email, etc.</p>
                </Col>
                <Col md={6}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
