import React from "react";
import "./InstagramGallery.css";

function InstagramGallery() {
  const instagramImages = [
    "/images/insta-item1.jpg",
    "/images/insta-item2.jpg",
    "/images/insta-item3.jpg",
    "/images/insta-item4.jpg",
    "/images/insta-item5.jpg",
    "/images/insta-item6.jpg",
  ];

  return (
    <section className="social-gallery">

      {/* Instagram Button */}
      <div className="social-follow-area">
        <a
          href="https://www.instagram.com/templatesjungle/"
          target="_blank"
          rel="noreferrer"
          className="social-follow-button"
        >
          Follow Us On Instagram
        </a>
      </div>

      {/* Images */}
      <div className="social-image-grid">

        {instagramImages.map((image, index) => (
          <div className="social-image-box" key={index}>

            <a
              href="https://www.instagram.com/templatesjungle/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="social-gallery-image"
              />

              <div className="social-hover">
                <span>Instagram</span>
              </div>

            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default InstagramGallery;

