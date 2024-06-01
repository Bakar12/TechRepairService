import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

const testimonials = [
    { text: "Great service! My phone was fixed in no time.", author: "John Doe" },
    { text: "Affordable and fast. Highly recommend.", author: "Jane Smith" },
    { text: "Professional and friendly staff.", author: "Tom Brown" }
];

const Testimonials = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h2 className="text-center mb-4">What Our Customers Say</h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Carousel className="testimonial-carousel">
                            {testimonials.map((testimonial, index) => (
                                <Carousel.Item key={index} className="text-center">
                                    <div className="testimonial-content p-4">
                                        <p className="testimonial-text">"{testimonial.text}"</p>
                                        <p className="testimonial-author">- {testimonial.author}</p>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonials;
