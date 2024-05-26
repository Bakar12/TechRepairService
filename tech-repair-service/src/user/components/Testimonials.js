import React, {useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {AnimatePresence, motion} from 'framer-motion';

const testimonials = [
    {text: "Great service! My phone was fixed in no time.", author: "John Doe"},
    {text: "Affordable and fast. Highly recommend.", author: "Jane Smith"},
    {text: "Professional and friendly staff.", author: "Tom Brown"}
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const nextTestimonial = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrent((prevCurrent) => (prevCurrent - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h2 className="text-center mb-4">What Our Customers Say</h2>
                    <div className="testimonial-wrapper">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={current}
                                initial={{opacity: 0, x: 100}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -100}}
                                transition={{duration: 0.5}}
                                className="testimonial-content p-4"
                            >
                                <p className="testimonial-text">"{testimonials[current].text}"</p>
                                <p className="testimonial-author">- {testimonials[current].author}</p>
                            </motion.div>
                        </AnimatePresence>
                        <div className="carousel-controls">
                            <Button variant="secondary" onClick={prevTestimonial} className="mr-2">
                                Previous
                            </Button>
                            <Button variant="secondary" onClick={nextTestimonial}>
                                Next
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonials;

