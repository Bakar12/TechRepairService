import React, {useState} from 'react';
import {Alert, Button, Col, Container, Form, Modal, Row, Spinner} from 'react-bootstrap';
import {motion} from 'framer-motion';

const ContactForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const {name, email, phone, subject, message} = formData;
        if (!name || !email || !subject || !message) {
            setError('Please fill out all required fields.');
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return false;
        }
        if (phone && !/^\d{10}$/.test(phone)) {
            setError('Please enter a valid phone number.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowModal(true);
        }, 2000);
    };

    return (
        <Container className="py-5">
            <Row>
                <Col md={8} className="mx-auto">
                    <h2>Contact Us</h2>
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5}}
                    >
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your phone number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <div className="text-center mt-4">
                                <Button variant="primary" type="submit" disabled={loading}>
                                    {loading ? <Spinner animation="border" size="sm"/> : 'Submit'}
                                </Button>
                            </div>
                        </Form>
                    </motion.div>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Thank You, {formData.name}!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Your message has been sent successfully. We will get back to you shortly.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;




