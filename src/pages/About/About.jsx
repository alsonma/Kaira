import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">
        <div className="about-hero-content">
          <p>OUR STORY</p>

          <h1>
            About Us
          </h1>

          <span>
            Fashion that feels personal, timeless, and made for
            everyday moments.
          </span>
        </div>
      </section>


      {/* ================= INTRO ================= */}

      <section className="about-intro">

        <div className="about-intro-image">
          <img
            src="/images/product-item-9.jpg"
            alt="Our Fashion Story"
          />
        </div>

        <div className="about-intro-content">

          <p>WHO WE ARE</p>

          <h2>
            Style is more than
            <br />
            what you wear.
          </h2>

          <p className="about-text">
            We believe fashion should be simple, expressive, and
            accessible to everyone. Our collections are carefully
            designed to bring together timeless styles and modern
            trends.
          </p>

          <p className="about-text">
            From everyday essentials to statement pieces, we create
            clothing that helps you feel confident and comfortable
            wherever life takes you.
          </p>

        </div>

      </section>


      {/* ================= VALUES ================= */}

      <section className="about-values">

        <div className="about-heading">
          <p>WHAT WE BELIEVE</p>
          <h2>Our Values</h2>
        </div>

        <div className="values-grid">

          <div className="value-card">
            <div className="value-number">01</div>
            <h3>Quality</h3>
            <p>
              We focus on quality materials and thoughtful designs
              that are made to last.
            </p>
          </div>

          <div className="value-card">
            <div className="value-number">02</div>
            <h3>Simplicity</h3>
            <p>
              We believe great fashion does not need to be complicated.
              Clean and timeless designs are at the heart of our style.
            </p>
          </div>

          <div className="value-card">
            <div className="value-number">03</div>
            <h3>Confidence</h3>
            <p>
              Every piece is designed to help you express your
              personality and feel confident in your own style.
            </p>
          </div>

        </div>

      </section>


      {/* ================= IMAGE BANNER ================= */}

      <section className="about-banner">

        <div className="about-banner-content">

          <p>DESIGNED FOR YOU</p>

          <h2>
            Timeless pieces.
            <br />
            Modern attitude.
          </h2>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="about-stats">

        <div className="stat-item">
          <h3>5+</h3>
          <p>Years of Style</p>
        </div>

        <div className="stat-item">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="stat-item">
          <h3>50+</h3>
          <p>Unique Styles</p>
        </div>

        <div className="stat-item">
          <h3>100%</h3>
          <p>Made With Care</p>
        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="about-final">

        <p>DISCOVER YOUR STYLE</p>

        <h2>
          Your style.
          <br />
          Your story.
        </h2>

        <p className="about-final-text">
          Explore our latest collections and find pieces that
          are made to become part of your everyday wardrobe.
        </p>

        <a href="/products" className="about-shop-btn">
          SHOP COLLECTION
        </a>

      </section>

    </div>
  );
}

export default About;

