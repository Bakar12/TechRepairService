import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    navigate('/admin/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/admin">
          <Navbar.Brand>Admin Panel</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/admin/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/service">
              <Nav.Link>Service</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/testimonials">
              <Nav.Link>Testimonials</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/users">
              <Nav.Link>User Management</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;



