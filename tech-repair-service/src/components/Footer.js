import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

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
                        <div>
                            <a href="https://facebook.com" className="text-white mx-2"><FaFacebook size={30}/></a>
                            <a href="https://twitter.com" className="text-white mx-2"><FaTwitter size={30}/></a>
                            <a href="https://instagram.com" className="text-white mx-2"><FaInstagram size={30}/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
