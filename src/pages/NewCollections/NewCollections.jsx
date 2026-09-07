import React from "react";
import "./NewCollections.css";

function NewCollections() {

  const products = [
    {
      id: 1,
      image: "/images/new-collection1.jpg",
      category: "WOMEN'S DRESS",
      name: "Elegant Satin Dress",
      price: "₹2,799",
      badge: "NEW"
    },
    {
      id: 2,
      image: "/images/new-collection2.jpg",
      category: "MEN'S SHIRT",
      name: "Relaxed Linen Shirt",
      price: "₹2,199",
      badge: "NEW"
    },
    {
      id: 3,
      image: "/images/new-collection3.jpg",
      category: "WOMEN'S TOP",
      name: "Classic Ribbed Top",
      price: "₹1,499",
      badge: "NEW"
    },
    {
      id: 4,
      image: "/images/new-collection4.jpg",
      category: "MEN'S JACKET",
      name: "Oversized Denim Jacket",
      price: "₹3,299",
      badge: "NEW"
    },
    {
      id: 5,
      image: "/images/new-collection5.jpg",
      category: "WOMEN'S SKIRT",
      name: "Pleated Midi Skirt",
      price: "₹1,999",
      badge: "NEW"
    },
    {
      id: 6,
      image: "/images/new-collection6.jpg",
      category: "MEN'S TROUSERS",
      name: "Straight Fit Trousers",
      price: "₹2,399",
      badge: "NEW"
    },
    {
      id: 7,
      image: "/images/new-collection7.jpg",
      category: "WOMEN'S BAG",
      name: "Structured Shoulder Bag",
      price: "₹2,599",
      badge: "NEW"
    },
    {
      id: 8,
      image: "/images/new-collection8.jpg",
      category: "ACCESSORIES",
      name: "Minimal Statement Watch",
      price: "₹2,899",
      badge: "NEW"
    }
  ];

  return (
    <div className="new-collections-page">

      {/* ================= HERO ================= */}

      <section className="new-collections-hero">

        <div className="new-collections-hero-content">

          <p>JUST DROPPED</p>

          <h1>
            New Collections
          </h1>

          <span>
            Discover the latest styles, fresh silhouettes and
            new season essentials.
          </span>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="new-collections-intro">

        <p>THE LATEST EDIT</p>

        <h2>
          Fresh styles.
          <br />
          Just for you.
        </h2>

        <span>
          Explore our newest collection of carefully selected
          pieces designed to refresh your wardrobe.
        </span>

      </section>


      {/* ================= FILTERS ================= */}

      <section className="new-collections-products">

        <div className="new-collections-top">

          <div>
            <p>NEW SEASON</p>
            <h2>Latest Collections</h2>
          </div>

          <select className="new-collections-sort">

            <option>Sort By</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>

          </select>

        </div>


        <div className="new-collections-filters">

          <button className="active">
            All
          </button>

          <button>
            Women
          </button>

          <button>
            Men
          </button>

          <button>
            Accessories
          </button>

        </div>


        {/* ================= PRODUCT GRID ================= */}

        <div className="new-collections-grid">

          {products.map((product) => (

            <div
              className="new-collection-card"
              key={product.id}
            >

              <div className="new-collection-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="new-collection-badge">
                  {product.badge}
                </span>

                <button className="new-collection-wishlist">
                  ♡
                </button>

              </div>


              <div className="new-collection-info">

                <p>
                  {product.category}
                </p>

                <h3>
                  {product.name}
                </h3>

                <span className="new-collection-price">
                  {product.price}
                </span>

                <button className="new-collection-cart">
                  ADD TO CART
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= PROMO ================= */}

      <section className="new-collections-promo">

        <div className="new-collections-promo-content">

          <p>NEW SEASON, NEW STYLE</p>

          <h2>
            Be the first
            <br />
            to wear it.
          </h2>

          <span>
            Discover our newest pieces before everyone else.
            Fresh styles are arriving now.
          </span>

        </div>

      </section>


      {/* ================= FINAL ================= */}

      <section className="new-collections-final">

        <p>STAY AHEAD</p>

        <h2>
          Something new
          <br />
          is always coming.
        </h2>

        <span>
          Keep your wardrobe fresh with our latest collections,
          updated regularly with new styles and seasonal essentials.
        </span>

      </section>

    </div>
  );
}

export default NewCollections;
