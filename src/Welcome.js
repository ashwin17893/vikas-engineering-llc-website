import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, NavDropdown, Form, FormControl, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContactModal from './ContactModal';
import './Welcome.css';
import logo from './logo.svg';
import car1 from './car1.png';
import car2 from './car2.png';
import car3 from './car3.png';

export default function Welcome() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="welcome-root">
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="36"
              height="36"
              className="d-inline-block align-top"
            />{' '}
            Vikas Engineering
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Services" id="nav-dropdown-services">
                <NavDropdown.Item as={Link} to="/construction-material-supplies">Construction Material Supplies</NavDropdown.Item>
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
            <Form className="d-flex me-2" role="search">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-light">Search</Button>
            </Form>
            <Button variant="warning" className="ms-1" onClick={() => setShowContact(true)}>Contact</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ContactModal show={showContact} onHide={() => setShowContact(false)} />

      <header className="welcome-hero py-5">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-5 fw-bold">High‑quality piping solutions, delivered.</h1>
              <p className="lead">End-to-end supply and fabrication for industrial and municipal projects.</p>
              <div className="d-flex gap-2">
                <Button variant="warning" size="lg">Get a Quote</Button>
                <Button variant="outline-light" size="lg">Learn More</Button>
              </div>
            </Col>
            <Col md={5} className="d-none d-md-block">
              <img src={logo} alt="illustration" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </header>

      <section className="welcome-features py-5">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center p-3">
                <Card.Body>
                  <Card.Title>Fabrication</Card.Title>
                  <Card.Text>Custom pipe fabrication and welding to project specs.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-3">
                <Card.Body>
                  <Card.Title>Logistics</Card.Title>
                  <Card.Text>Coordinated delivery and on-site support.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-3">
                <Card.Body>
                  <Card.Title>Inspection</Card.Title>
                  <Card.Text>Don’t compromise on quality — full inspection services.</Card.Text>
                </Card.Body>
              </Card>
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

      <footer className="welcome-footer py-3 bg-light text-center">
        <Container>© {new Date().getFullYear()} Vikas Engineering LLC</Container>
      </footer>
    </div>
  );
}
