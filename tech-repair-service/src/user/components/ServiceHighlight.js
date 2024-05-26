import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {motion} from 'framer-motion';

const services = [
    {title: "Smartphone Repair", description: "Screen replacement, battery issues, water damage, etc."},
    {title: "Laptop Repair", description: "Keyboard issues, battery replacement, software problems, etc."},
    {title: "Tablet Repair", description: "Screen replacement, battery issues, software updates, etc."},
    {title: "Game Console Repair", description: "Hardware issues, software problems, controller repairs, etc."}
];

const ServiceHighlight = () => {
    return (
        <Container className="py-5">
            <Row>
                {services.map((service, index) => (
                    <Col md={3} key={index}>
                        <motion.div
                            whileHover={{scale: 1.05}}
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.2}}
                        >
                            <Card className="mb-4 service-card">
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ServiceHighlight;



