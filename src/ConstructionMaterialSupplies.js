import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import './Welcome.css';
import bgImg from './car2.png';

export default function ConstructionMaterialSupplies() {
  const [showContact, setShowContact] = useState(false);
  const [initialMessage, setInitialMessage] = useState('');
  const [showSalesCard, setShowSalesCard] = useState(false);

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  };

  const headerStyle = {
    ...bgStyle,
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div className="welcome-root">
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Vikas Engineering</Navbar.Brand>
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

      <ContactModal show={showContact} onHide={() => setShowContact(false)} initialMessage={initialMessage} />

      <header className="pipeline-hero welcome-hero py-5" style={headerStyle}>
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-5 fw-bold">Construction Material Supplies</h1>
              <p className="lead">Complete pipeline fabrication, welding, testing, and inspection services tailored to project requirements.</p>
              <div className="d-flex gap-2">
                <Button variant="warning" size="lg">Request a Quote</Button>
                <Button variant="outline-light" size="lg" onClick={() => setShowSalesCard(s => !s)}>Contact Sales</Button>
              </div>
              {showSalesCard && (
                <div className="mt-3">
                  <Card className="p-3" style={{maxWidth: 420}}>
                    <Card.Body>
                      <Card.Title className="h6">Call to discuss construction materials</Card.Title>
                      <Card.Text className="mb-2">Vikas Engineering offers quick access to expertise and materials.</Card.Text>
                      <Card.Text><strong>Phone:</strong> <a href="tel:1234567890">123-456-7890</a></Card.Text>
                      <div className="d-flex">
                        <Button variant="secondary" size="sm" className="me-2" onClick={() => setShowSalesCard(false)}>Close</Button>
                        <Button variant="warning" size="sm" onClick={() => {
                          setInitialMessage('Inquiry: Discuss construction materials');
                          setShowContact(true);
                        }}>Contact via form</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </Col>
            <Col md={5} className="d-none d-md-block" />
          </Row>
        </Container>
      </header>

      <section className="py-4">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Card className="text-center shadow-sm wide-card">
                <Card.Body className="wide-card-inner">
                  <Card.Title className="h4">Pipes, Fittings & Flanges</Card.Title>
                  <Card.Text className="mb-0">Premium quality pipeline components for various applications</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

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
                  <Card.Title>Materials Supply</Card.Title>
                  <Card.Text>High-quality raw materials and components for pipeline projects.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-3">
                <Card.Body>
                  <Card.Title>Logistics</Card.Title>
                  <Card.Text>Coordinated delivery, staging, and on-site support.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="pipeline-contact py-5">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Call to discuss construction materials</Card.Title>
                  <Card.Text>
                    <strong>Vikas Engineering</strong> offers quick access to expertise and materials.
                  </Card.Text>
                  <Card.Text>
                    <strong>Phone:</strong> <a href="tel:1234567890">123-456-7890</a>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0 text-center">
                  <Button variant="warning" className="material-cta" onClick={() => {
                    setInitialMessage('Inquiry: Materials for pipeline/tunnel construction');
                    setShowContact(true);
                  }}>Contact us about materials</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Construction Services</Card.Title>
                  <Card.Text>Few of the materials we sell:</Card.Text>
                  <ul>
                    <li>Pipelines for tunnel construction1</li>
                    <li>Pipelines for tunnel construction2</li>
                  </ul>
                  <Card.Text className="mt-3">We provide much more than the above supplies based on your requirements. Please reach out via the contact form.</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0 text-center text-muted small">
                  More products and specifications available — contact us for details.
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="welcome-footer py-3 bg-light text-center mt-4">
        <Container>© 2025 Vikas Engineering LLC</Container>
      </footer>
    </div>
  );
}
