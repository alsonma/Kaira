import React from "react";
import "./Features.css";


function Features() {
  return (
    <>
      {/* ================================
          FEATURES
      ================================= */}

      <section className="features py-5">

        <div className="container">

          <div className="row">

            {/* Feature 1 */}
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-aos-delay="0"
            >
              <div className="py-5">

                <svg width="38" height="38" viewBox="0 0 24 24">
                  <use xlinkHref="#calendar"></use>
                </svg>

                <h4 className="element-title text-capitalize my-3">
                  Book An Appointment
                </h4>

                <p>
              Book a personal styling appointment and get expert guidance to choose styles that match your taste and occasion.
                </p>

              </div>
            </div>


            {/* Feature 2 */}
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-aos-delay="300"
            >
              <div className="py-5">

                <svg width="38" height="38" viewBox="0 0 24 24">
                  <use xlinkHref="#shopping-bag"></use>
                </svg>

                <h4 className="element-title text-capitalize my-3">
                  Pick up in store
                </h4>

                <p>
                 Shop online and collect your order from your nearest store. Enjoy a quick, convenient, and hassle-free pickup experience.
                </p>

              </div>
            </div>


            {/* Feature 3 */}
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-aos-delay="600"
            >
              <div className="py-5">

                <svg width="38" height="38" viewBox="0 0 24 24">
                  <use xlinkHref="#gift"></use>
                </svg>

                <h4 className="element-title text-capitalize my-3">
                  Special packaging
                </h4>

                <p>
                  Make every purchase feel special with our elegant packaging. Perfect for gifting or treating yourself to something beautiful.
                </p>

              </div>
            </div>


            {/* Feature 4 */}
            <div
              className="col-md-3 text-center"
              data-aos="fade-in"
              data-aos-delay="900"
            >
              <div className="py-5">

                <svg width="38" height="38" viewBox="0 0 24 24">
                  <use xlinkHref="#arrow-cycle"></use>
                </svg>

                <h4 className="element-title text-capitalize my-3">
                  Free global returns
                </h4>

                <p>
                Shop with confidence with our easy return policy. Enjoy free returns on eligible orders and a smooth, stress-free shopping experience.
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================================
          CATEGORIES
      ================================= */}

      <section className="category-showcase">

      <div className="category-container">

        <div className="category-grid">

          {/* Men */}
          <div className="category-card">

            <div className="category-image-box">
              <a href="/men">
                <img
                  src="/images/cat-item1.jpg"
                  alt="Men's Fashion"
                />
              </a>
            </div>

            <div className="category-button-box">
              <a href="/men" className="category-shop-btn">
                Shop for Men
              </a>
            </div>

          </div>


          {/* Women */}
          <div className="category-card">

            <div className="category-image-box">
              <a href="/women">
                <img
                  src="/images/cat-item2.jpg"
                  alt="Women's Fashion"
                />
              </a>
            </div>

            <div className="category-button-box">
              <a href="/women" className="category-shop-btn">
                Shop for Women
              </a>
            </div>

          </div>


          {/* Accessories */}
          <div className="category-card">

            <div className="category-image-box">
              <a href="/accessories">
                <img
                  src="/images/cat-item3.jpg"
                  alt="Accessories"
                />
              </a>
            </div>

            <div className="category-button-box">
              <a href="/accessories" className="category-shop-btn">
                Shop Accessories
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>

    </>
  );
}

export default Features;