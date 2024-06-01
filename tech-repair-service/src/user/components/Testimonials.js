import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const testimonials = [
    { text: "Great service! My phone was fixed in no time.", author: "John Doe" },
    { text: "Affordable and fast. Highly recommend.", author: "Jane Smith" },
    { text: "Professional and friendly staff.", author: "Tom Brown" },
    { text: "Superb customer service and quality repair.", author: "Sara Wilson" },
    { text: "Very pleased with the quick turnaround time.", author: "Mike Johnson" }
];

const Testimonials = () => {
    return (
        <Container className="py-5">
            <Row className="text-center mb-4">
                <Col>
                    <h2>What Our Customers Say</h2>
                </Col>
            </Row>
            <Row>
                {testimonials.map((testimonial, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="h-100">
                                <Card.Body className="d-flex flex-column justify-content-center">
                                    <Card.Text>"{testimonial.text}"</Card.Text>
                                    <Card.Footer className="text-muted">- {testimonial.author}</Card.Footer>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Testimonials;
