import React from "react";
import NewArrivals from "./NewArrivals";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Landing() {
  return (
    <>
      <section className="landing-section">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="landing-swiper"
        >
          <SwiperSlide>
            <div className="slide" style={{ backgroundImage: "url('./assets/slide01.jpg')" }}>
              <div className="hero-content">
                <h1>Welcome to ShopifyX</h1>
                <p>Explore our exclusive collection today.</p>
                <a href="/products" className="btn-primary">Shop Now</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide" style={{ backgroundImage: "url('/assets/slide02.jpg')" }}>
              <div className="hero-content">
                <h1>New Arrivals Just Dropped</h1>
                <p>Stay ahead with the latest trends.</p>
                <a href="/products" className="btn-primary">View New Arrivals</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide" style={{ backgroundImage: "url('/assets/slide03.jpg')" }}>
              <div className="hero-content">
                <h1>Deals You Can't Miss</h1>
                <p>Get the best value for your money.</p>
                <a href="/products" className="btn-primary">Discover Deals</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <NewArrivals />

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At ShopifyX, we are passionate about bringing you top-quality products 
          at affordable prices. Our mission is to provide exceptional customer 
          service and a seamless shopping experience. Whether you're looking for 
          everyday essentials or unique finds, we've got you covered.
        </p>
      </section>
    </>
  );
}
