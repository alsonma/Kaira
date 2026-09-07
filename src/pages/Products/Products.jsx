import React from "react";
import "./Products.css";

function Products() {

  const products = [
    {
      id: 1,
      image: "/images/product1.jpg",
      category: "WOMEN'S DRESS",
      name: "Elegant Summer Dress",
      price: "₹2,499",
      badge: "NEW"
    },
    {
      id: 2,
      image: "/images/product2.jpg",
      category: "MEN'S SHIRT",
      name: "Classic Oxford Shirt",
      price: "₹1,899",
      badge: ""
    },
    {
      id: 3,
      image: "/images/product3.jpg",
      category: "WOMEN'S TOP",
      name: "Relaxed Cotton Top",
      price: "₹1,299",
      badge: "NEW"
    },
    {
      id: 4,
      image: "/images/product4.jpg",
      category: "MEN'S TROUSERS",
      name: "Tailored Casual Trousers",
      price: "₹2,299",
      badge: ""
    },
    {
      id: 5,
      image: "/images/product5.jpg",
      category: "WOMEN'S DRESS",
      name: "Floral Midi Dress",
      price: "₹2,799",
      badge: "SALE"
    },
    {
      id: 6,
      image: "/images/product6.jpg",
      category: "MEN'S JACKET",
      name: "Modern Casual Jacket",
      price: "₹3,499",
      badge: ""
    },
    {
      id: 7,
      image: "/images/product7.jpg",
      category: "WOMEN'S SKIRT",
      name: "Pleated Midi Skirt",
      price: "₹1,999",
      badge: ""
    },
    {
      id: 8,
      image: "/images/product8.jpg",
      category: "ACCESSORIES",
      name: "Minimal Leather Bag",
      price: "₹2,999",
      badge: "NEW"
    }
  ];

  return (
    <div className="products-page">

      {/* ================= PRODUCTS ================= */}

      <section className="products-section">

        <div className="products-heading">
          <div>
            <p>EXPLORE</p>
            <h2>All Products</h2>
          </div>

          <select className="products-sort">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>


        <div className="products-grid">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                {product.badge && (
                  <span className="product-badge">
                    {product.badge}
                  </span>
                )}

                <button className="product-wishlist">
                  ♡
                </button>

              </div>


              <div className="product-info">

                <p>{product.category}</p>

                <h3>{product.name}</h3>

                <span className="product-price">
                  {product.price}
                </span>

                <button className="add-cart">
                  ADD TO CART
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Products;

