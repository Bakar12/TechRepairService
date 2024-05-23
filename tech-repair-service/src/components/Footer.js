import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Tech Repair Service</h5>
                        <p>123 Repair St, Tech City, TX 12345</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@techrepair.com</p>
                    </Col>
                    <Col md={6} className="text-md-right">
                        <p>&copy; 2023 Tech Repair Service. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
