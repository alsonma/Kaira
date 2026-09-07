import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p>GET IN TOUCH</p>
          <h1>Contact Us</h1>
          <span>
            We'd love to hear from you. Reach out to us for any questions,
            assistance, or feedback.
          </span>
        </div>
      </section>


      {/* ================= CONTACT INFO ================= */}
      <section className="contact-section">

        <div className="contact-heading">
          <p>CONTACT</p>
          <h2>How Can We Help?</h2>
        </div>

        <div className="contact-grid">

          {/* ADDRESS */}
          <div className="contact-info-card">
            <div className="contact-icon">⌖</div>
            <h3>Visit Us</h3>
            <p>
              25 Fashion Avenue<br />
              Downtown, Kerala<br />
              India
            </p>
          </div>

          {/* PHONE */}
          <div className="contact-info-card">
            <div className="contact-icon">☏</div>
            <h3>Call Us</h3>
            <p>
              +91 98765 43210<br />
              +91 98765 12345
            </p>
          </div>

          {/* EMAIL */}
          <div className="contact-info-card">
            <div className="contact-icon">✉</div>
            <h3>Email Us</h3>
            <p>
              support@fashionstore.com<br />
              hello@fashionstore.com
            </p>
          </div>

        </div>
      </section>


      {/* ================= CONTACT FORM ================= */}
      <section className="contact-form-section">

        <div className="contact-form-wrapper">

          <div className="contact-form-content">
            <p>DROP US A LINE</p>
            <h2>Let's Talk</h2>

            <span>
              Have a question about our products, orders, or collections?
              Send us a message and our team will get back to you.
            </span>
          </div>

          <form className="contact-form">

            <div className="contact-form-row">
              <div className="contact-input">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact-input">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="contact-input">
              <label>Subject</label>
              <input
                type="text"
                placeholder="What is your message about?"
                required
              />
            </div>

            <div className="contact-input">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              SEND MESSAGE
            </button>

          </form>

        </div>
      </section>


      {/* ================= FAQ / SUPPORT ================= */}
      <section className="contact-support">

        <p>NEED MORE HELP?</p>

        <h2>
          We're here to make
          <br />
          your experience better.
        </h2>

        <span>
          Our customer support team is available to assist you with
          orders, returns, sizing, products, and more.
        </span>

      </section>

    </div>
  );
}

export default Contact;

