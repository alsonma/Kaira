import React from "react";
import "./NewCollections.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function NewCollections() {
  const collections = [
    {
      image: "/images/banner-image-6.jpg",
      title: "Elegant Dresses",
      description:
        "Discover timeless dresses designed to bring elegance and confidence to every occasion.",
    },
    {
      image: "/images/banner-image-1.jpg",
      title: "Summer Collection",
      description:
        "Light, comfortable and stylish outfits made for your perfect summer look.",
    },
    {
      image: "/images/banner-image-2.jpg",
      title: "Party Wear",
      description:
        "Make every celebration special with our stunning collection of party dresses.",
    },
    {
      image: "/images/banner-image-3.jpg",
      title: "Casual Collection",
      description:
        "Effortless everyday styles that combine comfort with modern fashion.",
    },
    {
      image: "/images/banner-image-4.jpg",
      title: "Trendy Tops",
      description:
        "Explore fashionable tops and contemporary styles for your everyday wardrobe.",
    },
    {
      image: "/images/banner-image-5.jpg",
      title: "Premium Collection",
      description:
        "Experience premium fashion with carefully selected styles from VELOURA.",
    },
  ];

  return (
    <section id="billboard" className="bg-light py-5">

      <div className="container">

        <div className="row justify-content-center">

          <h1
            className="section-title text-center mt-4"
            data-aos="fade-up"
          >
            New Collections
          </h1>

          <div
            className="col-md-6 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p>
              Explore the latest collection from KAIRA, featuring
              elegant dresses, modern styles and timeless fashion
              designed for every occasion.
            </p>
          </div>

        </div>


        <div className="row">

          <div
            className="swiper main-swiper py-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={25}
              slidesPerView={3}
              loop={true}

              navigation={{
                nextEl: ".icon-arrow-right",
                prevEl: ".icon-arrow-left",
              }}

              pagination={{
                clickable: true,
              }}

              breakpoints={{
                0: {
                  slidesPerView: 1,
                },

                576: {
                  slidesPerView: 2,
                },

                992: {
                  slidesPerView: 3,
                },
              }}

              className="main-swiper"
            >

              {collections.map((collection, index) => (

                <SwiperSlide key={index}>

                  <div className="banner-item image-zoom-effect">

                    <div className="image-holder">

                      <a href="/shop">
                        <img
                          src={collection.image}
                          alt={collection.title}
                          className="img-fluid"
                        />
                      </a>

                    </div>


                    <div className="banner-content py-4">

                      <h5 className="element-title text-uppercase">

                        <a
                          href="/shop"
                          className="item-anchor"
                        >
                          {collection.title}
                        </a>

                      </h5>

                      <p>
                        {collection.description}
                      </p>

                      <div className="btn-left">

                        <a
                          href="/shop"
                          className="btn-link fs-6 text-uppercase item-anchor text-decoration-none"
                        >
                          Discover Now
                        </a>

                      </div>

                    </div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

            {/* Pagination */} 
            <div className="swiper-pagination">
              </div> 
            </div> 
            {/* Left Arrow */} 
            <div className="icon-arrow icon-arrow-left">
               <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" > 
                <use xlinkHref="#arrow-left"></use> 
              </svg> 
            </div> 
            {/* Right Arrow */} 
            <div className="icon-arrow icon-arrow-right"> 
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" > 
                <use xlinkHref="#arrow-right"></use> 
              </svg> 
            </div> 
          </div> 
        </div> 
      </section>
  );
}

export default NewCollections;