import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, NavDropdown, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useState } from 'react';
import ContactModal from './ContactModal';
import './Welcome.css';
import logo from './logo1.png';
import car1 from './car1.png';
import car2 from './car2.png';
import car3 from './car3.png';
import welcomeBg from './welcomePage.png';

export default function Welcome() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="welcome-root">
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="logo"
              src={logo}
              width="36"
              height="36"
              className="d-inline-block align-top"
            />{' '}
            Vikas Piping and Fittings
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Services" id="nav-dropdown-services">
                <NavDropdown.Item as={Link} to="/construction-material-supplies">Piping and Fitting catalog</NavDropdown.Item>
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

  <ContactModal show={showContact} onHide={() => setShowContact(false)} />

      <header className="welcome-hero py-5" style={{
        backgroundImage: `url(${welcomeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: '#fff'
      }}>
        <div style={{position: 'absolute', inset: 0, background: 'rgba(11,61,145,0.55)'}} />
        <Container className="py-5" style={{position: 'relative', zIndex: 1}}>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-5 fw-bold">High‑quality piping and fitting materials, delivered.</h1>
              <p className="lead">End-to-end supply for industrial and municipal projects.</p>
              <div className="d-flex gap-2">
                <Button variant="warning" size="lg" onClick={() => setShowContact(true)}>Get a Quote</Button>
                <Button as={Link} to="/construction-material-supplies" variant="outline-light" size="lg">Learn More</Button>
              </div>
            </Col>
            {/* right-side illustration removed to let the hero background show */}
          </Row>
        </Container>
      </header>

      <section className="welcome-features py-5">
        <Container>
          <Row className="mb-4">
            <Col className="text-center">
              <h2 className="fw-bold">Our Products</h2>
              <p className="text-muted mb-0">High-quality materials for all your construction needs</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center p-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Pipes, Fittings & Flanges</Card.Title>
                  <Card.Text>Premium quality products that meet industry standards and specifications..</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Couplings</Card.Title>
                  <Card.Text>Reliable connections ensuring leak-free performance in demanding environments.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Valves</Card.Title>
                  <Card.Text>High-performance valves engineered for precision and durability in critical applications.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="text-center mt-4">
          <Row>
            <Col>
              <Button as={Link} to="/construction-material-supplies" variant="warning" size="lg">See our products</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="welcome-carousel py-4">
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={car1}
                alt="Car 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={car2}
                alt="Car 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={car3}
                alt="Car 3"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
