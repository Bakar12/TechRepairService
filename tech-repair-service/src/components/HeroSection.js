import React from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import {motion} from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="hero-section text-white text-center py-5" style={{
            backgroundImage: 'url(/path-to-your-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Container>
                <Row>
                    <Col>
                        <motion.div
                            initial={{opacity: 0, y: -50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1}}
                        >
                            <h1>Expert Tech Repair Services</h1>
                            <p>Fast, reliable, and affordable repair services for your smartphones, laptops, tablets,
                                and game consoles.</p>
                            <Button variant="light" size="lg">Get a Quote</Button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;
