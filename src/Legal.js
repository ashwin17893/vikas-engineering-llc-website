import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ContactModal from './ContactModal';
import logo from './logo1.png';
import './Welcome.css';

export default function Legal() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Vikas Engineering" width={36} height={36} className="d-inline-block align-top" />{' '}
            Vikas Engineering
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Services" id="nav-dropdown-services">
                <NavDropdown.Item as={Link} to="/construction-material-supplies">Pipes and Fittings catalog</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/engineering-services">Engineering Services</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/legal">Legal</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Projects" id="nav-dropdown-projects">
                <NavDropdown.Item as={Link} to="/projects">Project Artifacts</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/projects">Photo Gallery</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/legal">Legal</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="More" id="nav-dropdown-more">
                <NavDropdown.Item as={Link} to="/about">About us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/careers">Careers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/legal">Legal</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="warning" className="ms-1" onClick={() => setShowContact(true)}>Contact</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ContactModal show={showContact} onHide={() => setShowContact(false)} initialMessage={"I'm interested in legal and policy information."} />

      <header className="about-hero py-5" style={{ position: 'relative', color: '#fff' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,61,145,0.55)' }} />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center text-center py-5">
            <Col md={8}>
              <h1 className="display-5 fw-bold">Legal</h1>
              <p className="lead">Legal disclaimers and policy documents coming soon.</p>
              <Button variant="warning" onClick={() => setShowContact(true)}>Contact</Button>
            </Col>
          </Row>
        </Container>
      </header>

      <Footer />
    </div>
  );
}
