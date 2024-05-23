import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
    { title: "Smartphone Repair", description: "Screen replacement, battery issues, water damage, etc." },
    { title: "Laptop Repair", description: "Keyboard issues, battery replacement, software problems, etc." },
    { title: "Tablet Repair", description: "Screen replacement, battery issues, software updates, etc." },
    { title: "Game Console Repair", description: "Hardware issues, software problems, controller repairs, etc." }
];

const ServicesPage = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h2>Our Services</h2>
                    {services.map((service, index) => (
                        <Card key={index} className="mb-4">
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default ServicesPage;
