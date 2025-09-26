import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ContactModal({ show, onHide, initialMessage }) {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState(null);

  // Captcha challenge state
  const [showChallenge, setShowChallenge] = useState(false);
  const [challenge, setChallenge] = useState('');
  const [challengeInput, setChallengeInput] = useState('');
  const [challengeError, setChallengeError] = useState(null);

  const SUBMIT_URL = 'https://formspree.io/f/xzzjzjky';

  const randomWord = (len = 5) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let s = '';
    for (let i = 0; i < len; i++) s += letters[Math.floor(Math.random() * letters.length)];
    return s;
  };

  const submitFormData = async (formData) => {
    try {
      let res = await fetch(SUBMIT_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      // fallback retry as urlencoded if Formspree responds 403
      if (res.status === 403) {
        try {
          const urlParams = new URLSearchParams();
          for (const [key, value] of formData.entries()) urlParams.append(key, value);
          res = await fetch(SUBMIT_URL, {
            method: 'POST',
            body: urlParams,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
          });
        } catch (innerErr) {
          // eslint-disable-next-line no-console
          console.error('URL-encoded retry failed', innerErr);
        }
      }

      let data = null;
      try {
        data = await res.json();
      } catch (jsonErr) {
        try {
          const txt = await res.text();
          data = { _raw: txt };
        } catch (txtErr) {
          data = null;
        }
      }

      if (res.ok) {
        setSucceeded(true);
        return { ok: true };
      }

      const serverMessage = data && (data.errors ? data.errors.map(e => e.message).join('; ') : data._raw || JSON.stringify(data));
      setErrors([{ message: `Submission failed (status ${res.status})${serverMessage ? ': ' + serverMessage : ''}` }]);
      // eslint-disable-next-line no-console
      console.error('Form submission failed', { status: res.status, body: data });
      return { ok: false };
    } catch (err) {
      setErrors([{ message: err.message || 'Network error' }]);
      return { ok: false };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    setChallengeError(null);
    setSubmitting(true);

    // Honeypot (if present)
    if (e.target.website && e.target.website.value) {
      setErrors([{ message: 'Bot detected' }]);
      setSubmitting(false);
      return;
    }

    // If challenge not yet shown, generate and show it
    if (!showChallenge) {
      setChallenge(randomWord(5));
      setShowChallenge(true);
      setSubmitting(false);
      return;
    }

    // If challenge shown, verify input
    if (challengeInput.trim().toLowerCase() !== challenge.toLowerCase()) {
      setChallengeError('Captcha does not match. Please try again.');
      setSubmitting(false);
      return;
    }

    // Build form data and remove captcha_input before sending
    const formData = new FormData(e.target);
    if (formData.has('captcha_input')) formData.delete('captcha_input');

    const result = await submitFormData(formData);
    setSubmitting(false);
    if (result.ok) {
      // clear challenge UI
      setShowChallenge(false);
      setChallenge('');
      setChallengeInput('');
    }
  };

  const regenerateChallenge = () => {
    setChallenge(randomWord(5));
    setChallengeInput('');
    setChallengeError(null);
  };

  const cancelChallenge = () => {
    setShowChallenge(false);
    setChallenge('');
    setChallengeInput('');
    setChallengeError(null);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {succeeded ? (
          <div>
            <p>Thanks — we'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="contactName" className="form-label">Name</label>
              <input id="contactName" name="name" className="form-control" type="text" />
            </div>

            <div className="mb-3">
              <label htmlFor="contactEmail" className="form-label">Email</label>
              <input id="contactEmail" name="email" className="form-control" type="email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="contactMessage" className="form-label">Message</label>
              <textarea id="contactMessage" name="message" className="form-control" rows={3} defaultValue={initialMessage || ''} required />
            </div>

            {showChallenge && (
              <div className="mb-3">
                <label className="form-label">Type the word shown below to verify</label>
                <div style={{ padding: '8px', background: '#f5f5f5', fontFamily: 'monospace', fontSize: '20px', letterSpacing: '4px', textAlign: 'center' }}>{challenge}</div>
                <input
                  name="captcha_input"
                  value={challengeInput}
                  onChange={(ev) => setChallengeInput(ev.target.value)}
                  className="form-control mt-2"
                  placeholder="Type the word exactly"
                  required
                />
                {challengeError && <div className="text-danger mt-1">{challengeError}</div>}
                <div className="mt-2 d-flex gap-2">
                  <Button variant="outline-secondary" size="sm" onClick={regenerateChallenge}>Regenerate</Button>
                  <Button variant="outline-secondary" size="sm" onClick={cancelChallenge}>Cancel</Button>
                </div>
              </div>
            )}

            {errors && (
              <div className="alert alert-danger">
                {errors.map((err, i) => <div key={i}>{err.message}</div>)}
              </div>
            )}

            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={onHide} className="me-2" disabled={submitting}>Close</Button>
              <Button variant="primary" type="submit" disabled={submitting}>{submitting ? 'Sending...' : (showChallenge ? 'Verify & Send' : 'Send')}</Button>
            </div>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
}
