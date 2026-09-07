import React from "react";
import "./Collection.css";

function Collection() {
  return (
    <section className="collection-showcase">
      <div className="collection-wrapper">


        <div className="collection-feature">

          {/* Image */}
          <div className="collection-visual">
            <img
              src="/images/single-image-2.jpg"
              alt="Classic Winter Collection"
            />
          </div>

          {/* Content */}
          <div className="collection-details">
            <div className="collection-details-inner">

              <h2>Classic Winter Collection</h2>

              <p>
                Discover the elegance of winter with our Classic Winter Collection. Featuring timeless designs, cozy fabrics, and sophisticated styles, this collection is made for effortless seasonal fashion. From warm layers to refined everyday essentials, find pieces that keep you comfortable while making a statement. Embrace the season with classic colors, premium textures, and styles designed to last.
              </p>

              <a href="/" className="collection-shop-btn">
                Shop Collection
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Collection;

