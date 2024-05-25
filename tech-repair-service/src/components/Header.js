import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import ThemeToggleButton from './ThemeToggleButton';
import logo from '../assets/logo.png'; // Ensure you have a logo image in the assets folder

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="Tech Repair Service" height="40"
                             className="d-inline-block align-top mr-2"/>
                        Tech Repair Service
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/services">
                            <Nav.Link>Services</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/blog">
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                        <Nav.Item className="d-flex align-items-center ml-3">
                            <ThemeToggleButton/>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

