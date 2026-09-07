import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter-area">
      <div className="newsletter-container">

        <div className="newsletter-content">

          <div className="newsletter-heading">
            <h2>Sign Up For Our Newsletter</h2>
          </div>

          <form className="newsletter-form">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="newsletter-input"
            />

            <button type="submit" className="newsletter-button">
              Sign Up
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;

