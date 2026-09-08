import React from "react";
import "./Men.css";
import { Link } from "react-router-dom";

function Men() {
  return (
    <div className="men-page">

      {/* <section className="men-hero">
        <div className="men-hero-content">

          <p className="men-subtitle">NEW SEASON</p>

          <h1>
            Men's
            <br />
            Collection
          </h1>

          <p className="men-description">
            Discover refined styles, modern essentials and timeless
            pieces designed for every occasion.
          </p>

          <a href="/productmen-products" className="men-btn">
            SHOP COLLECTION
          </a>

        </div>
      </section> */}


      {/* ================= CATEGORIES ================= */}
      <section className="men-categories">

        <div className="men-section-heading">
          <p>EXPLORE</p>
          <h2>Shop Men's Fashion</h2>
        </div>

        <div className="men-category-grid">

          {/* CASUAL */}
          <Link to="/product" className="men-category-card">

            <img
              src="/images/cat-large-item1.jpg"
              alt="Men's Casual Wear"
            />

            <div className="men-category-overlay">
              <h3>Casual Wear</h3>
              <span>SHOP NOW →</span>
            </div>

          </Link>


          {/* FORMAL */}
          <Link to="/product" className="men-category-card">

            <img
              src="/images/banner-image-4.jpg"
              alt="Men's Formal Wear"
            />

            <div className="men-category-overlay">
              <h3>Formal Wear</h3>
              <span>SHOP NOW →</span>
            </div>

          </Link>


          {/* JACKETS */}
          <Link to="/product" className="men-category-card">

            <img
              src="/images/product-item-1.jpg"
              alt="Men's Jackets"
            />

            <div className="men-category-overlay">
              <h3>Jackets</h3>
              <span>SHOP NOW →</span>
            </div>

          </Link>

        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="men-products" id="men-products">

        <div className="men-section-heading">
          <p>OUR PICKS</p>
          <h2>Featured Men's Styles</h2>
        </div>


        <div className="men-product-grid">

          {/* PRODUCT 1 */}
          <div className="men-product-card">

            <div className="men-product-image">

              <img
                src="/images/product-item-4.jpg"
                alt="Classic Shirt"
              />

              <span className="men-product-badge">
                NEW
              </span>

              <button className="men-wishlist-btn">
                ♡
              </button>

            </div>

            <div className="men-product-info">

              <p>MEN'S SHIRT</p>

              <h3>
                Classic Oxford Shirt
              </h3>

              <span className="men-product-price">
                ₹1,899
              </span>

            </div>

          </div>


          {/* PRODUCT 2 */}
          <div className="men-product-card">

            <div className="men-product-image">

              <img
                src="/images/wishlist-item3.jpg"
                alt="Casual Shirt"
              />

              <button className="men-wishlist-btn">
                ♡
              </button>

            </div>

            <div className="men-product-info">

              <p>CASUAL WEAR</p>

              <h3>
                Relaxed Linen Shirt
              </h3>

              <span className="men-product-price">
                ₹2,199
              </span>

            </div>

          </div>


          {/* PRODUCT 3 */}
          <div className="men-product-card">

            <div className="men-product-image">

              <img
                src="/images/product-item-1.jpg"
                alt="Men's Jacket"
              />

              <span className="men-product-badge">
                SALE
              </span>

              <button className="men-wishlist-btn">
                ♡
              </button>

            </div>

            <div className="men-product-info">

              <p>OUTERWEAR</p>

              <h3>
                Modern Casual Jacket
              </h3>

              <span className="men-product-price">
                ₹3,499
              </span>

            </div>

          </div>


          {/* PRODUCT 4 */}
          <div className="men-product-card">

            <div className="men-product-image">

              <img
                src="/images/cat-large-item1.jpg"
                alt="Men's Trousers"
              />

              <button className="men-wishlist-btn">
                ♡
              </button>

            </div>

            <div className="men-product-info">

              <p>MEN'S TROUSERS</p>

              <h3>
                Classic Tailored Trousers
              </h3>

              <span className="men-product-price">
                ₹2,499
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROMOTIONAL BANNER ================= */}
      <section className="men-promo">

        <div className="men-promo-content">

          <p>LIMITED TIME OFFER</p>

          <h2>
            Up to 30% Off
            <br />
            Men's Collection
          </h2>

          <a href="/product" className="men-promo-btn">
            SHOP SALE
          </a>

        </div>

      </section>


      {/* ================= FINAL SECTION ================= */}
      <section className="men-discover">

        <p>DEFINED BY STYLE</p>

        <h2>
          Everyday essentials.
          <br />
          Elevated.
        </h2>

        <p className="men-discover-text">
          From effortless casualwear to sophisticated formal pieces,
          discover clothing designed to fit your lifestyle.
        </p>

        <a href="/product" className="men-discover-btn">
          DISCOVER MORE
        </a>

      </section>

    </div>
  );
}

export default Men;

