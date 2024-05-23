import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

// Define an array of testimonials
const testimonials = [
    { text: "Great service! My phone was fixed in no time.", author: "John Doe" },
    { text: "Affordable and fast. Highly recommend.", author: "Jane Smith" },
    { text: "Professional and friendly staff.", author: "Tom Brown" }
];

// Define the Testimonials component
const Testimonials = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h2 className="text-center">What Our Customers Say</h2>
                    <Carousel>
                        {/* Iterate over the testimonials array and render each testimonial */}
                        {testimonials.map((testimonial, index) => (
                            <Carousel.Item key={index}>
                                <p className="text-center">{testimonial.text}</p>
                                <p className="text-center"><strong>- {testimonial.author}</strong></p>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonials;
