# Contact Proxy removed

The example contact proxy that included reCAPTCHA verification and forwarding
to Formspree was intentionally removed per project maintainer request. The
client now posts directly to the Formspree freeform endpoint: https://formspree.io/f/xzzjzjky

If you need a server-side proxy in the future, implement a minimal endpoint
that verifies reCAPTCHA server-side (keeping the secret out of source control)
and forwards the submission to Formspree.
