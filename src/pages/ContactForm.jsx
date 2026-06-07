import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      form.current.reset();
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-form-page">
      <div className="contact-form-header">
        <h1>
          Send a <span>Message</span>
        </h1>
      </div>

      <div className="contact-form-wrapper">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>
          <button className="submit-btn" type="submit">
            {sending ? "Sending..." : (
              <>
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </>
            )}
          </button>
          {error && (
            <div className="form-message error">
              Failed to send message. Please try again later.
            </div>
          )}
          {sent && (
            <div className="form-message success">
              Message received! I'll get back to you shortly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
