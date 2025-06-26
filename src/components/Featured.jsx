import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feature1 from "../assets/durumi-site2/Durumi Site 2 A_1 - Photo.webp";
import feature2 from "../assets/durumi-site2/Durumi Site 2 A_2 - Photo.webp";
import feature3 from "../assets/durumi-site2/Durumi Site 2 A_4 - Photo.webp";
import feature4 from "../assets/durumi-site2/Durumi Site 2 A_5 - Photo.webp";
import feature5 from "../assets/durumi-site2/Durumi Site 2 A_6 - Photo.webp";
import feature6 from "../assets/durumi-site2/Durumi Site 2 A_7 - Photo.webp";
import feature7 from "../assets/durumi-site2/Durumi Site 2 A_8 - Photo.webp";
import feature8 from "../assets/durumi-site2/Durumi Site 2 A_9 - Photo.webp";
import feature9 from "../assets/durumi-site2/Durumi Site 2 A_10 - Photo.webp";
import feature10 from "../assets/durumi-site2/Durumi Site 2 A11.webp";
import feature11 from "../assets/durumi-site2/Durumi Site 2 A12.webp";

const Featured = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const features = [
    feature1,
    feature2,
    feature3,
    feature4,
    feature5,
    feature6,
    feature7,
    feature8,
    feature9,
    feature10,
    feature11,
  ];
  return (
    <section className="flex flex-col justify-center items-center font-semibold">
      <h1>Featured Projects</h1>

      <div className="w-full m-auto my-10 border-2 border-gray-700 rounded-lg">
        <Slider {...settings}>
          {features.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt="slide"
                className="w-full md:h-[70vh] lg:h-[75vh] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>

      <h4>
        Discover Durumi Site 1 - Six stunning 3-bedroom flats designed for
        modern living.
      </h4>
    </section>
  );
};

export default Featured;
