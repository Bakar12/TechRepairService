import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Typical from 'react-typical';

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
                            initial={{ opacity: 0, y: -50, rotateX: -30 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 1 }}
                            style={{ perspective: 1000 }}
                        >
                            <motion.h1
                                initial={{ scale: 0.8, rotateY: 30 }}
                                animate={{ scale: 1, rotateY: 0 }}
                                transition={{ duration: 1 }}
                            >
                                Expert Tech Repair Services
                            </motion.h1>
                            <motion.div
                                initial={{ scale: 0.8, rotateY: -30 }}
                                animate={{ scale: 1, rotateY: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <Typical
                                    steps={[
                                        'Fast, reliable, and affordable repair services for your smartphones, laptops, tablets, and game consoles.',
                                        3000,
                                    ]}
                                    loop={1}
                                    wrapper="p"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0.8, rotateY: 30 }}
                                animate={{ scale: 1, rotateY: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                <Button variant="light" size="lg">Get a Quote</Button>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;
