import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Image, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import heroImg from './about.png';
import logo from './logo1.png';
import './About.css';
import Footer from './Footer';

export default function About() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Vikas Engineering" width={36} height={36} className="d-inline-block align-top" />{' '}
            Vikas Piping and Fittings
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
            {/* search removed */}
            <Button variant="warning" className="ms-1" onClick={() => setShowContact(true)}>Contact</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0',
        color: '#fff'
      }}>
        <Container>
          <Row>
            <Col md={8} lg={7} className="py-5">
              <h1 className="display-5">About Vikas Engineering</h1>
              <p className="lead">We Provide High-quality piping materials, fittings and engineering services for industrial and municipal projects.</p>
              <p>
                We provide pipes, fittings and complete pipeline solutions built to last. Our team combines decades of field experience
                with modern manufacturing and testing standards to deliver reliable results on time.
              </p>
              <Button variant="light" onClick={() => setShowContact(true)}>Request a Quote</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="mb-4">
          <Col md={8}>
            <h2>Who we are</h2>
            <p>
              Vikas Engineering is a full-service supplier of pipe and fitting materials focused on
              municipal water, and industrial infrastructure. We partner with contractors, engineers and owners to
              provide materials, installation guidance and post-delivery support.
            </p>
            <h4>Our mission</h4>
            <p>
              To deliver durable, cost-effective materials and exceptional service that helps our clients complete projects safely
              and on schedule.
            </p>
          </Col>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Contact Sales</Card.Title>
                <Card.Text>Request a quote or ask a product question — our sales team will respond quickly.</Card.Text>
                <address className="small text-muted mb-2">
                  <strong>Vikas Piping and Fittings</strong><br />
                  1601 Ohio Dr SW<br />
                  Washington DC, 20004<br />
                </address>
                <p className="mb-1 small">Phone: <strong><a className="text-decoration-none text-dark" href="tel:12028678692">202-867-8692</a></strong></p>
                <p className="small">Email: <strong><a className="text-decoration-none text-dark" href="mailto:sales@vikaspipeandfittings.com">sales@vikaspipeandfittings.com</a></strong></p>
                <Button variant="primary" onClick={() => setShowContact(true)}>Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Experience</Card.Title>
                <Card.Text>Decades of experience in supplying and supporting pipeline and civil projects.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Quality</Card.Title>
                <Card.Text>Strict QA and testing to ensure long service life and regulatory compliance.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Support</Card.Title>
                <Card.Text>Technical guidance from planning through installation and after-sales support.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>Our values</h3>
            <p>
              Safety, integrity, and a commitment to excellence guide everything we do. We work hard to build trust with our
              customers and to continuously improve our processes.
            </p>
          </Col>
        </Row>

      </Container>

      <ContactModal show={showContact} onHide={() => setShowContact(false)} initialMessage={"I'm interested in learning more about your products and pricing."} />

      <Footer />
    </>
  );
}
