import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./NewArrivals.css";

function NewArrival() {
  const products = [
    {
      image: "/images/product-item-1.jpg",
      name: "Dark Florish Onepiece",
      price: "$95.00",
    },
    {
      image: "/images/product-item-2.jpg",
      name: "Baggy Shirt",
      price: "$55.00",
    },
    {
      image: "/images/product-item-3.jpg",
      name: "Cotton Off-White Shirt",
      price: "$65.00",
    },
    {
      image: "/images/product-item-4.jpg",
      name: "Crop Sweater",
      price: "$50.00",
    },
    {
      image: "/images/product-item-10.jpg",
      name: "Crop Sweater",
      price: "$70.00",
    },
  ];

  return (
    <section className="arrival-showcase">
      <div className="arrival-wrapper">

        {/* Heading */}
        <div className="arrival-heading">
          <h2>Our New Arrivals</h2>

          <a href="/" className="arrival-view-link">
            View All Products
          </a>
        </div>

        {/* Carousel */}
        <div className="arrival-carousel">

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".arrival-next",
              prevEl: ".arrival-prev",
            }}
            pagination={{
              el: ".arrival-pagination",
              clickable: true,
            }}
            spaceBetween={25}
            slidesPerView={4}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
              },
            }}
          >

            {products.map((product, index) => (
              <SwiperSlide key={index}>

                <div className="arrival-card">

                  {/* Image */}
                  <div className="arrival-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    {/* Hover Content */}
                    <div className="arrival-overlay">

                      {/* Wishlist */}
                      <button className="arrival-like">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 24 24"
                        >
                          <use xlinkHref="#heart"></use>
                        </svg>
                      </button>

                      {/* Product Information */}
                      <div className="arrival-info">

                        <h3>
                          <a href="/">
                            {product.name}
                          </a>
                        </h3>

                        <a
                          href="/"
                          className="arrival-product-price"
                        >
                          {product.price}
                        </a>

                      </div>

                    </div>

                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

          {/* Left Arrow */}
          <button className="arrival-next-arrow arrival-prev">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <use xlinkHref="#arrow-left"></use>
            </svg>
          </button>

          {/* Right Arrow */}
          <button className="arrival-next-arrow arrival-next">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <use xlinkHref="#arrow-right"></use>
            </svg>
          </button>

          {/* Pagination */}
          <div className="arrival-pagination"></div>

        </div>

      </div>
    </section>
  );
}

export default NewArrival;

