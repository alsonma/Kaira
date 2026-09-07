import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      text: "More than expected crazy soft, flexible and best fitted white simple denim shirt.",
      title: "Casual Way",
    },
    {
      text: "Best fitted white denim shirt more than expected crazy soft, flexible.",
      title: "Uptop",
    },
    {
      text: "Best fitted white denim shirt more white denim than expected flexible crazy soft.",
      title: "Denim Craze",
    },
    {
      text: "Best fitted white denim shirt more than expected crazy soft, flexible.",
      title: "Uptop",
    },
  ];

  return (
    <section className="review-showcase">

      {/* Heading */}
      <div className="review-heading">
        <h2>We Love Good Compliment</h2>
      </div>

      {/* Carousel */}
      <div className="review-slider">

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          speed={900}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            el: ".review-dots",
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
          className="review-swiper"
        >

          {reviews.map((review, index) => (
            <SwiperSlide key={index}>

              <div className="review-card">

                <div className="review-quote">
                  <span>“</span>

                  <p>{review.text}</p>

                </div>

                <div className="review-name">
                  {review.title}
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

      {/* Pagination */}
      <div className="review-dots"></div>

    </section>
  );
}

export default Testimonials;

