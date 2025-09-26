import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './logo1.png';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import Footer from './Footer';
import './Welcome.css';
import bgImg from './car2.png';

export default function ConstructionMaterialSupplies() {
  const [showContact, setShowContact] = useState(false);
  const [initialMessage, setInitialMessage] = useState('');
  const [showSalesCard, setShowSalesCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleSelected = (id) => {
    setSelectedCard(prev => (prev === id ? null : id));
  };

  const handleCardKey = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSelected(id);
    }
  };

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
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Vikas Engineering" width={36} height={36} className="d-inline-block align-top" />{' '}
            Vikas Piping and Fittings
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Services" id="nav-dropdown-services">
                <NavDropdown.Item as={Link} to="/construction-material-supplies">Pipes and Fitting catalog</NavDropdown.Item>
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

  <ContactModal show={showContact} onHide={() => setShowContact(false)} initialMessage={initialMessage} />

      <header className="pipeline-hero welcome-hero py-5" style={headerStyle}>
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-5 fw-bold">Construction Material Supplies</h1>
              <p className="lead">Complete pipeline fabrication, welding, testing, and inspection services tailored to project requirements.</p>
              <div className="d-flex gap-2">
                <Button variant="warning" size="lg" onClick={() => { setInitialMessage('Request: Custom quote'); setShowContact(true); }}>Request a Quote</Button>
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
                  <Card.Title className="h4" style={{fontSize: '2em', fontWeight: 700}}>Pipes, Fittings & Flanges</Card.Title>
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
              <Card
                className={`h-100 text-center p-3 ${selectedCard === 'pvc' ? 'feature-selected' : ''}`}
                tabIndex={0}
                role="button"
                aria-pressed={selectedCard === 'pvc'}
                onClick={() => toggleSelected('pvc')}
                onKeyDown={(e) => handleCardKey(e, 'pvc')}
              >
                <Card.Body>
                  <Card.Title style={{fontSize: '2em', fontWeight: 700}}>PVC Pipes</Card.Title>
                  <Card.Text className="text-dark fw-normal">High-quality PVC pipes suitable for water supply, drainage, and sewage systems. Available in various diameters and pressure ratings.</Card.Text>
                  <Card.Text>
                    <strong>Size Range:</strong>
                    <br />15mm - 315mm
                    <br /><strong>Pressure Rating:</strong>
                    <br />4-16 Bar
                    <br /><strong>Standard:</strong>
                    <br />IS 4985, ASTM D1785
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className={`h-100 text-center p-3 ${selectedCard === 'hdpe' ? 'feature-selected' : ''}`}
                tabIndex={0}
                role="button"
                aria-pressed={selectedCard === 'hdpe'}
                onClick={() => toggleSelected('hdpe')}
                onKeyDown={(e) => handleCardKey(e, 'hdpe')}
              >
                <Card.Body>
                  <Card.Title style={{fontSize: '2em', fontWeight: 700}}>HDPE Pipes</Card.Title>
                  <Card.Text className="text-dark fw-normal">Durable and flexible HDPE pipes ideal for water supply, gas distribution, and chemical fluid transfer applications.</Card.Text>
                  <Card.Text>
                    <strong>Size Range:</strong>
                    <br />20mm - 630mm
                    <br /><strong>Pressure Rating:</strong>
                    <br />PE 80, PE 100
                    <br /><strong>Standard:</strong>
                    <br />IS 4984, ISO 4427
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className={`h-100 text-center p-3 ${selectedCard === 'flanges' ? 'feature-selected' : ''}`}
                tabIndex={0}
                role="button"
                aria-pressed={selectedCard === 'flanges'}
                onClick={() => toggleSelected('flanges')}
                onKeyDown={(e) => handleCardKey(e, 'flanges')}
              >
                <Card.Body>
                  <Card.Title style={{fontSize: '2em', fontWeight: 700}}>Steel Flanges</Card.Title>
                  <Card.Text className="text-dark fw-normal">High-strength steel flanges designed for secure pipe connections in industrial and municipal applications.</Card.Text>
                  <Card.Text>
                    <strong>Size Range:</strong>
                    <br />15mm - 600mm
                    <br /><strong>Types:</strong>
                    <br />Slip-on, Weld Neck, Blind
                    <br /><strong>Standard:</strong>
                    <br />ANSI B16.5, BS 10
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="py-4">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Card className="text-center shadow-sm wide-card">
                <Card.Body className="wide-card-inner">
                  <Card.Title className="h1" style={{fontSize: '2em', fontWeight: 700}}>Couplings</Card.Title>
                  <Card.Text className="mb-0">Reliable connection solutions for your piping systems</Card.Text>
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
              <Card
                className={`h-100 text-center p-3 ${selectedCard === 'mech-couplings' ? 'feature-selected' : ''}`}
                tabIndex={0}
                role="button"
                aria-pressed={selectedCard === 'mech-couplings'}
                onClick={() => toggleSelected('mech-couplings')}
                onKeyDown={(e) => handleCardKey(e, 'mech-couplings')}
              >
                <Card.Body>
                  <Card.Title style={{fontSize: '2em', fontWeight: 700}}>Mechanical Couplings</Card.Title>
                  <Card.Text className="text-dark fw-normal">Heavy-duty mechanical couplings designed for joining pipes of similar or dissimilar materials with secure, leak-free connections.</Card.Text>
                  <Card.Text>
                    <strong>Size Range:</strong>
                    <br />15mm - 2000mm
                    <br /><strong>Working Pressure:</strong>
                    <br />Up to 100 Bar
                    <br /><strong>Material:</strong>
                    <br />Carbon Steel, Stainless Steel
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className={`h-100 text-center p-3 ${selectedCard === 'flange-adaptors' ? 'feature-selected' : ''}`}
                tabIndex={0}
                role="button"
                aria-pressed={selectedCard === 'flange-adaptors'}
                onClick={() => toggleSelected('flange-adaptors')}
                onKeyDown={(e) => handleCardKey(e, 'flange-adaptors')}
              >
                <Card.Body>
                  <Card.Title style={{fontSize: '2em', fontWeight: 700}}>Flange Adaptors</Card.Title>
                  <Card.Text className="text-dark fw-normal">Versatile flange adaptors for connecting plain-ended pipes to flanged fittings, valves, and equipment.</Card.Text>
                  <Card.Text>
                    <strong>Size Range:</strong>
                    <br />50mm - 1200mm
                    <br /><strong>Pressure Rating:</strong>
                    <br />PN10, PN16, PN25
                    <br /><strong>Standard:</strong>
                    <br />ANSI, BS EN 1092
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className={`h-100 text-center p-3 ${selectedCard === 'repair-couplings' ? 'feature-selected' : ''}`}
                tabIndex={0}
                role="button"
                aria-pressed={selectedCard === 'repair-couplings'}
                onClick={() => toggleSelected('repair-couplings')}
                onKeyDown={(e) => handleCardKey(e, 'repair-couplings')}
              >
                <Card.Body>
                  <Card.Title style={{fontSize: '2em', fontWeight: 700}}>Repair Couplings</Card.Title>
                  <Card.Text className="text-dark fw-normal">Specialized couplings for quick and effective repair of damaged pipelines without the need for pipe replacement.</Card.Text>
                  <Card.Text>
                    <strong>Size Range:</strong>
                    <br />15mm - 600mm
                    <br /><strong>Application:</strong>
                    <br />Emergency Repairs, Maintenance
                    <br /><strong>Material:</strong>
                    <br />Stainless Steel, Ductile Iron
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Card className="text-center shadow-sm wide-card">
                <Card.Body className="wide-card-inner">
                  <Card.Title className="h1" style={{fontSize: '2em', fontWeight: 700}}>Valves</Card.Title>
                  <Card.Text className="mb-0">High-quality valves for fluid control applications</Card.Text>
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
              <Card
                className={`h-100 text-center p-3 ${selectedCard === 'gate-valves' ? 'feature-selected' : ''}`}
                tabIndex={0}
                role="button"
                aria-pressed={selectedCard === 'gate-valves'}
                onClick={() => toggleSelected('gate-valves')}
                onKeyDown={(e) => handleCardKey(e, 'gate-valves')}
              >
                <Card.Body>
                  <Card.Title style={{fontSize: '2em', fontWeight: 700}}>Gate Valves</Card.Title>
                  <Card.Text className="text-dark fw-normal">Heavy-duty gate valves designed for reliable flow control in water, oil, and gas applications with minimal pressure drop.</Card.Text>
                  <Card.Text>
                    <strong>Size Range:</strong>
                    <br />15mm - 600mm
                    <br /><strong>Pressure Rating:</strong>
                    <br />PN10, PN16, PN25, PN40
                    <br /><strong>Material:</strong>
                    <br />Cast Iron, Ductile Iron, Carbon Steel
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className={`h-100 text-center p-3 ${selectedCard === 'butterfly-valves' ? 'feature-selected' : ''}`}
                tabIndex={0}
                role="button"
                aria-pressed={selectedCard === 'butterfly-valves'}
                onClick={() => toggleSelected('butterfly-valves')}
                onKeyDown={(e) => handleCardKey(e, 'butterfly-valves')}
              >
                <Card.Body>
                  <Card.Title style={{fontSize: '2em', fontWeight: 700}}>Butterfly Valves</Card.Title>
                  <Card.Text className="text-dark fw-normal">Compact and efficient butterfly valves for quick shut-off and control applications in water distribution and industrial systems.</Card.Text>
                  <Card.Text>
                    <strong>Size Range:</strong>
                    <br />50mm - 1200mm
                    <br /><strong>Types:</strong>
                    <br />Wafer, Lug, Double Flanged
                    <br /><strong>Operation:</strong>
                    <br />Manual, Gearbox, Electric, Pneumatic
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className={`h-100 text-center p-3 ${selectedCard === 'check-valves' ? 'feature-selected' : ''}`}
                tabIndex={0}
                role="button"
                aria-pressed={selectedCard === 'check-valves'}
                onClick={() => toggleSelected('check-valves')}
                onKeyDown={(e) => handleCardKey(e, 'check-valves')}
              >
                <Card.Body>
                  <Card.Title style={{fontSize: '2em', fontWeight: 700}}>Check Valves</Card.Title>
                  <Card.Text className="text-dark fw-normal">Reliable check valves that prevent backflow in pipeline systems, protecting pumps and ensuring unidirectional flow.</Card.Text>
                  <Card.Text>
                    <strong>Types:</strong>
                    <br />Swing, Silent, Dual Plate
                    <br /><strong>Size Range:</strong>
                    <br />15mm - 600mm
                    <br /><strong>Pressure Class:</strong>
                    <br />150#, 300#, 600#
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="py-4">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Card className="text-center shadow-sm wide-card">
                <Card.Body className="wide-card-inner">
                  <Card.Title className="h2" style={{fontSize: '2em', fontWeight: 700}}>Need a Custom Quote?</Card.Title>
                  <Card.Text className="mb-3">If your project needs tailored materials or specifications, our team will prepare a custom quote.</Card.Text>
                  <Button variant="warning" size="lg" onClick={() => { setInitialMessage('Request: Custom quote'); setShowContact(true); }}>Request a Quote</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
