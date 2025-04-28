import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feature1 from '../assets/durumi-site1/DurumiSite1_3.webp'
import feature2 from "../assets/durumi-site1/DurumiSite1_2.webp";
import feature3 from "../assets/durumi-site1/DurumiSite1_1.webp";
import feature5 from "../assets/durumi-site1/DurumiSite1_2.webp";
import feature6 from "../assets/durumi-site1/DurumiSite1_3.webp";
const Featured = () => {

        const settings = {
          arrows: false,
          dots: false, 
          infinite: true, 
          speed: 700, 
          slidesToShow: 2, 
          slidesToScroll: 1, 
          autoplay: true, 
          autoplaySpeed: 5000, 
        };
  return (
    <section className="flex flex-col justify-center items-center">
      <h1>Featured Projects</h1>

      <div className="w-full lg:w-[90%] m-auto my-10 border-2 border-gray-300 rounded-lg">
        <Slider {...settings}>
          <div>
            <img
              src={feature1}
              alt="Slide 1"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={feature2}
              alt="Slide 3"
              className="w-full h-96 object-cover mx-3"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={feature3}
              alt="Slide 3"
              className="w-full h-96 object-cover mx-6"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={feature5}
              alt="Slide 2"
              className="w-full h-96 object-cover mx-9"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={feature6}
              alt="Slide 2"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
        </Slider>
      </div>

      <h4>
        Discover Durumi Site 1 - Six stunning 3-bedroom flats designed for
        modern living.
      </h4>
    </section>
  );
}

export default Featured