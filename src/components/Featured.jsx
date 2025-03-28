import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feature1 from '../assets/fe1.jpg'
import feature2 from "../assets/f2.jpg";
import feature3 from "../assets/fe3.jpg";
import feature5 from "../assets/fe4.jpg";
import feature6 from "../assets/f6.jpg";
const Featured = () => {

        const settings = {
          arrows: false,
          dots: false, // Show navigation dots
          infinite: true, // Infinite loop scrolling
          speed: 700, // Animation speed
          slidesToShow: 2, // Number of slides visible at once
          slidesToScroll: 1, // Number of slides to scroll per action
          autoplay: true, // Auto slide change
          autoplaySpeed: 5000, // Time before auto-slide
        };
  return (
    <section className="flex flex-col justify-center items-center">
      <h1>Featured Projects</h1>

      <div className="w-[90%] lg:w-[90%] m-auto my-10 border-2 border-gray-300 rounded-lg">
        <Slider {...settings}>
          <div>
            <img
              src={feature1}
              alt="Slide 1"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <img
              src={feature2}
              alt="Slide 3"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <img
              src={feature3}
              alt="Slide 3"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <img
              src={feature5}
              alt="Slide 2"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <img
              src={feature6}
              alt="Slide 2"
              className="w-full h-96 object-cover"
            />
          </div>
        </Slider>
      </div>

      <h4>
        Discover Durumi Site 1 - Six stunning 3-bedroom flats designed for modern
        living.
      </h4>
    </section>
  );
}

export default Featured