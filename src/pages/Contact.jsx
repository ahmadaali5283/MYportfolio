import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

import { iconsInfo } from "../data/icons";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>
          Let's <span>Work Together</span>
        </h1>
      </div>

      <div className="contact-grid">
        <div className="contact-info-col">
          {iconsInfo.map((item) => (
            <a
              key={item.label}
              className="contact-item"
              href={item.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-item-icon">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="contact-icon-img"
                />
              </span>
              <div className="contact-item-text">
                <span className="contact-item-label">{item.label}</span>
                <span className="contact-item-value">{item.value}</span>
              </div>
              <span className="contact-item-arrow">↗</span>
            </a>
          ))}
        </div>

        <div className="contact-cta-col">
          <div className="cta-card">
            <div className="cta-card-icon">🚀</div>
            <h2>Ready to start a project?</h2>
            <p>Drop me a message through the form and I'll get back soon.</p>
            <Link to="/ContactForm" style={{ textDecoration: "none" }}>
              <button className="cta-btn">
                Send a Message
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
