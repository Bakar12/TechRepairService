import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {motion} from 'framer-motion';

const teamMembers = [
    {name: "John Doe", role: "CEO"},
    {name: "Jane Smith", role: "CTO"},
    {name: "Tom Brown", role: "Lead Technician"}
];

const AboutPage = () => {
    return (
        <Container className="py-5">
            <Row className="mb-4">
                <Col>
                    <motion.div
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h2>About Us</h2>
                    </motion.div>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6}>
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h3>Our History</h3>
                        <p>Founded in [Year], our company has been dedicated to providing top-notch tech repair
                            services. Over the years, we have grown to become a trusted name in the industry, known for
                            our expertise and customer satisfaction.</p>
                    </motion.div>
                </Col>
                <Col md={6}>
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
                        <img src="/path-to-history-image.jpg" alt="Company History" className="img-fluid"/>
                    </motion.div>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6}>
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
                        <img src="/path-to-mission-image.jpg" alt="Our Mission" className="img-fluid"/>
                    </motion.div>
                </Col>
                <Col md={6}>
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h3>Our Mission</h3>
                        <p>Our mission is to provide reliable, affordable, and efficient repair services. We strive to
                            exceed our customers' expectations by delivering high-quality repairs and exceptional
                            customer service.</p>
                    </motion.div>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6}>
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h3>Our Vision</h3>
                        <p>We envision a future where everyone can enjoy their technology without interruptions. We aim
                            to be the leading tech repair service provider, known for our innovation and
                            customer-centric approach.</p>
                    </motion.div>
                </Col>
                <Col md={6}>
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
                        <img src="/path-to-vision-image.jpg" alt="Our Vision" className="img-fluid"/>
                    </motion.div>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <motion.div
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h3>Meet Our Team</h3>
                    </motion.div>
                </Col>
            </Row>

            <Row>
                {teamMembers.map((member, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                        >
                            <Card>
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Text>{member.role}</Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AboutPage;
