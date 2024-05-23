import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h2>About Us</h2>
                    <p>Company history, mission, and vision...</p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
