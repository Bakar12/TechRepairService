import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

// Header component
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                {/* Brand logo */}
                <Navbar.Brand href="/">Tech Repair Service</Navbar.Brand>
                {/* Navbar toggle button */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* Navbar links */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {/* Home link */}
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* Services link */}
                        <Nav.Link href="/services">Services</Nav.Link>
                        {/* About Us link */}
                        <Nav.Link href="/about">About Us</Nav.Link>
                        {/* Contact link */}
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        {/* Blog link */}
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
