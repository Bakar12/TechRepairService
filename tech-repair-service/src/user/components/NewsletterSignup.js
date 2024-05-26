import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';

const NewsletterSignup = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col md={6} className="mx-auto">
                    <h2>Subscribe to Our Newsletter</h2>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Subscribe</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsletterSignup;
