import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function ContactModal({ show, onHide, initialMessage }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // In a real app, submit to API here.
      onHide();
    }
    setValidated(true);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Your name" />
            <Form.Control.Feedback type="invalid">Please provide your name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="name@example.com" />
            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control required as="textarea" rows={3} defaultValue={initialMessage || ''} />
            <Form.Control.Feedback type="invalid">Please add a message.</Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
          <Button variant="primary" type="submit">Send</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
