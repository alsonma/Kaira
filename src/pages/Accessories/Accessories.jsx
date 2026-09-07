import React from "react";
import "./Accessories.css";

function Accessories() {

  const accessories = [
    {
      id: 1,
      image: "/images/accessory1.jpg",
      category: "BAGS",
      name: "Classic Leather Handbag",
      price: "₹2,999",
      badge: "NEW"
    },
    {
      id: 2,
      image: "/images/accessory2.jpg",
      category: "WATCHES",
      name: "Minimal Classic Watch",
      price: "₹2,499",
      badge: ""
    },
    {
      id: 3,
      image: "/images/accessory3.jpg",
      category: "SUNGLASSES",
      name: "Classic Frame Sunglasses",
      price: "₹1,499",
      badge: "NEW"
    },
    {
      id: 4,
      image: "/images/accessory4.jpg",
      category: "BELTS",
      name: "Premium Leather Belt",
      price: "₹1,299",
      badge: ""
    },
    {
      id: 5,
      image: "/images/accessory5.jpg",
      category: "WALLETS",
      name: "Slim Leather Wallet",
      price: "₹1,199",
      badge: ""
    },
    {
      id: 6,
      image: "/images/accessory6.jpg",
      category: "JEWELLERY",
      name: "Minimal Gold Necklace",
      price: "₹1,899",
      badge: "SALE"
    },
    {
      id: 7,
      image: "/images/accessory7.jpg",
      category: "BAGS",
      name: "Everyday Shoulder Bag",
      price: "₹2,299",
      badge: ""
    },
    {
      id: 8,
      image: "/images/accessory8.jpg",
      category: "CAPS",
      name: "Classic Cotton Cap",
      price: "₹899",
      badge: "NEW"
    }
  ];

  return (
    <div className="accessories-page">

      {/* ================= HERO ================= */}

      <section className="accessories-hero">

        <div className="accessories-hero-content">

          <p>COMPLETE YOUR LOOK</p>

          <h1>Accessories</h1>

          <span>
            Discover the finishing touches that bring your
            everyday style together.
          </span>

        </div>

      </section>


      {/* ================= CATEGORY NAV ================= */}

      <section className="accessories-categories">

        <div className="accessories-heading">
          <p>EXPLORE</p>
          <h2>Shop Accessories</h2>
        </div>

        <div className="accessories-category-list">

          <button>All</button>
          <button>Bags</button>
          <button>Watches</button>
          <button>Sunglasses</button>
          <button>Jewellery</button>
          <button>Belts</button>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="accessories-products">

        <div className="accessories-products-top">

          <div>
            <p>OUR COLLECTION</p>
            <h2>Featured Accessories</h2>
          </div>

          <select className="accessories-sort">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>

        </div>


        <div className="accessories-grid">

          {accessories.map((item) => (

            <div
              className="accessory-card"
              key={item.id}
            >

              <div className="accessory-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

                {item.badge && (
                  <span className="accessory-badge">
                    {item.badge}
                  </span>
                )}

                <button className="accessory-wishlist">
                  ♡
                </button>

              </div>


              <div className="accessory-info">

                <p>{item.category}</p>

                <h3>{item.name}</h3>

                <span className="accessory-price">
                  {item.price}
                </span>

                <button className="accessory-cart">
                  ADD TO CART
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= PROMO ================= */}

      <section className="accessories-promo">

        <div className="accessories-promo-content">

          <p>THE FINISHING TOUCH</p>

          <h2>
            Small details.
            <br />
            Big impact.
          </h2>

          <span>
            Complete your wardrobe with carefully selected
            accessories designed to complement every look.
          </span>

        </div>

      </section>


      {/* ================= FINAL ================= */}

      <section className="accessories-final">

        <p>STYLE EVERY DETAIL</p>

        <h2>
          Designed to
          <br />
          complement you.
        </h2>

        <span>
          From everyday essentials to statement pieces,
          find accessories that make your personal style stand out.
        </span>

      </section>

    </div>
  );
}

export default Accessories;
