
import React from "react";
import "./Women.css";

function Women() {
  return (
    <div className="women-page">

      


      {/* CATEGORY SECTION */}
      <section className="women-categories">

        <div className="women-section-heading">
          <p>EXPLORE</p>
          <h2>Shop Women's Fashion</h2>
        </div>

        <div className="category-grid">

          <a href="#" className="category-card">
            <img
              src="/images/product-item-3.jpg"
              alt="Women's Dresses"
            />

            <div className="category-overlay">
              <h3>Dresses</h3>
              <span>SHOP NOW →</span>
            </div>
          </a>


          <a href="#" className="category-card">
            <img
              src="/images/product-item-5.jpg"
              alt="Women's Tops"
            />

            <div className="category-overlay">
              <h3>Tops</h3>
              <span>SHOP NOW →</span>
            </div>
          </a>


          <a href="#" className="category-card">
            <img
              src="/images/product-item-2.jpg"
              alt="Party Wear"
            />

            <div className="category-overlay">
              <h3>Party Wear</h3>
              <span>SHOP NOW →</span>
            </div>
          </a>

        </div>
      </section>


      {/* FEATURED PRODUCTS */}
      <section className="women-products" id="women-products">

        <div className="women-section-heading">
          <p>OUR PICKS</p>
          <h2>Featured Women's Styles</h2>
        </div>


        <div className="product-grid">

          {/* PRODUCT 1 */}
          <div className="product-card">

            <div className="product-image">
              <img
                src="/images/product-item-8.jpg"
                alt="Elegant Dress"
              />

              <span className="product-badge">
                NEW
              </span>

              <button className="wishlist-btn">
                ♡
              </button>
            </div>

            <div className="product-info">
              <p>WOMEN'S DRESS</p>

              <h3>
                Elegant Floral Dress
              </h3>

              <span className="product-price">
                ₹2,499
              </span>
            </div>

          </div>


          {/* PRODUCT 2 */}
          <div className="product-card">

            <div className="product-image">
              <img
                src="/images/product-item-9.jpg"
                alt="Casual Dress"
              />

              <button className="wishlist-btn">
                ♡
              </button>
            </div>

            <div className="product-info">
              <p>WOMEN'S CASUAL</p>

              <h3>
                Classic Casual Dress
              </h3>

              <span className="product-price">
                ₹1,999
              </span>
            </div>

          </div>


          {/* PRODUCT 3 */}
          <div className="product-card">

            <div className="product-image">
              <img
                src="/images/product-item-10.jpg"
                alt="Party Dress"
              />

              <span className="product-badge">
                SALE
              </span>

              <button className="wishlist-btn">
                ♡
              </button>
            </div>

            <div className="product-info">
              <p>PARTY WEAR</p>

              <h3>
                Evening Party Dress
              </h3>

              <span className="product-price">
                ₹2,799
              </span>
            </div>

          </div>


          {/* PRODUCT 4 */}
          <div className="product-card">

            <div className="product-image">
              <img
                src="/images/product-item-6.jpg"
                alt="Summer Dress"
              />

              <button className="wishlist-btn">
                ♡
              </button>
            </div>

            <div className="product-info">
              <p>SUMMER COLLECTION</p>

              <h3>
                Summer Linen Dress
              </h3>

              <span className="product-price">
                ₹2,299
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* PROMOTIONAL BANNER */}
      <section className="women-promo">

        <div className="promo-content">

          <p>LIMITED TIME OFFER</p>

          <h2>
            Up to 30% Off
            <br />
            Women's Collection
          </h2>

          <a href="#" className="promo-btn">
            SHOP SALE
          </a>

        </div>

      </section>


      {/* NEWSLETTER */}
      <section className="women-newsletter">

        <p>STAY IN STYLE</p>

        <h2>
          Discover what's new
        </h2>

        <p className="newsletter-text">
          Be the first to know about new collections,
          exclusive offers and the latest fashion trends.
        </p>

        <a href="#" className="newsletter-btn">
          EXPLORE MORE
        </a>

      </section>

    </div>
  );
}

export default Women;


