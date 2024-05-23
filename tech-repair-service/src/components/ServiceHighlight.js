import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Define an array of services
const services = [
    { title: "Smartphone Repair", description: "Screen replacement, battery issues, water damage, etc." },
    { title: "Laptop Repair", description: "Keyboard issues, battery replacement, software problems, etc." },
    { title: "Tablet Repair", description: "Screen replacement, battery issues, software updates, etc." },
    { title: "Game Console Repair", description: "Hardware issues, software problems, controller repairs, etc." }
];

// ServiceHighlight component
const ServiceHighlight = () => {
    return (
        <Container className="py-5">
            <Row>
                {/* Map over the services array and render a Card component for each service */}
                {services.map((service, index) => (
                    <Col md={3} key={index}>
                        <Card className="mb-4">
                            <Card.Body>
                                {/* Display the title of the service */}
                                <Card.Title>{service.title}</Card.Title>
                                {/* Display the description of the service */}
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ServiceHighlight;
