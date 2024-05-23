import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Define the HeroSection component
const HeroSection = () => {
    return (
        <div className="hero-section bg-primary text-white text-center py-5">
            <Container>
                <Row>
                    <Col>
                        <h1>Expert Tech Repair Services</h1>
                        <p>Fast, reliable, and affordable repair services for your smartphones, laptops, tablets, and game consoles.</p>
                        <Button variant="light" size="lg">Get a Quote</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

// Export the HeroSection component as the default export
export default HeroSection;
