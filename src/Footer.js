import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';

export default function Footer() {
  const [showContact, setShowContact] = useState(false);
  return (
    <footer className="site-footer bg-dark text-light pt-5">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5 className="text-uppercase fw-bold">About Vikas Engineering</h5>
            <p className="small text-light">We provide High-quality construction materials and engineering services for industrial and municipal projects.</p>
          </Col>
          <Col md={2}>
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><Link to="/construction-material-supplies" className="text-light">Products</Link></li>
              <li><Link to="/projects" className="text-light">Projects</Link></li>
              <li><Link to="/about" className="text-light">About</Link></li>
              <li><button type="button" className="btn btn-link p-0 text-light align-baseline" onClick={() => setShowContact(true)}>Contact</button></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold">Products</h6>
            <ul className="list-unstyled small">
              <li><Link to="/construction-material-supplies#pipes" className="text-light">Pipes & Fittings</Link></li>
              <li><Link to="/construction-material-supplies#couplings" className="text-light">Couplings</Link></li>
              <li><Link to="/construction-material-supplies#valves" className="text-light">Valves</Link></li>
              <li><Link to="/construction-material-supplies#flanges" className="text-light">Flanges</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold">Contact</h6>
            <address className="small text-light">
              Vikas pipe and Fittings<br />
              123 Industrial Road<br />
              City, State ZIP<br />
            </address>
            <p className="mb-1 small">Phone: <a className="text-light" href="tel:1234567890">123-456-7890</a></p>
            <p className="small">Email: <a className="text-light" href="mailto:sales@vikaspipeandfittings.com">sales@vikaspipeandfittings.com</a></p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom bg-black text-center text-muted py-2 mt-4">
        <Container>
          <small>© {new Date().getFullYear()} Vikas Engineering LLC — All rights reserved.</small>
        </Container>
      </div>
      <ContactModal show={showContact} onHide={() => setShowContact(false)} initialMessage={"I'm interested in learning more about your products and pricing."} />
    </footer>
  );
}
