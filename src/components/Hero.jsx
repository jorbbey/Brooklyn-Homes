import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/durumi-site1/DurumiSite1_3.webp";
import image2 from "../assets/durumi-site1/DurumiSite1_2.webp";
import image3 from "../assets/durumi-site1/DurumiSite1_1.webp";
import image4 from "../assets/durumi-site2/Durumi Site 2 A_1 - Photo.webp";
import image5 from "../assets/durumi-site2/Durumi Site 2 A_2 - Photo.webp";
import image6 from "../assets/durumi-site2/Durumi Site 2 A_4 - Photo.webp";``
import image7 from "../assets/durumi-site2/Durumi Site 2 A_5 - Photo.webp";
import image8 from "../assets/durumi-site2/Durumi Site 2 A_7 - Photo.webp";
import image9 from "../assets/durumi-site2/Durumi Site 2 A_8 - Photo.webp";
import image10 from "../assets/durumi-site2/Durumi Site 2 A_9 - Photo.webp";
import image11 from "../assets/durumi-site2/Durumi Site 2 A_10 - Photo.webp";
import image12 from "../assets/durumi-site2/Durumi Site 2 A11.webp";
import image13 from "../assets/durumi-site2/Durumi Site 2 A12.webp";

const Hero = () => {
     const settings = {
       arrows: false,
       dots: false,
       infinite: true,
       speed: 700,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 4000,
     };

     const images = [
       image4,
       image5,
       image6,
       image7,
       image8,
       image9,
       image10,
       image11,
       image12,
       image13,
       image1,
       image2,
       image3,
     ];

     const desc = [
       {
         head: "Durumi Site I",
         text: "Our mission is to engage in issues that are of concern to individuals",
         btnText: "Take a tour",
       },
       {
         head: "Durumi Site II",
         text: "Stategically located within the durumi central Abuja District",
         btnText: "Explore Site II",
       },
     ];
  return (
    // <div className="relative text-black h-[70vh] lg:h-screen flex items-center justify-center lg:justify-start bg-[url('/Hero2.jpg')] bg-cover bg-center">
    <div className="relative h-[50vh] md:h-[70vh] lg:h-[100vh] w-full">
      <Slider {...settings}>
        {images.map((image) => (
          <div className="relative">
            <img
              src={image}
              alt={image}
              className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      {/* Content */}
      <div className="relative z-auto">
        <h1 className="absolute bottom-12 md:bottom-28 text-white text-sm md:text-lg lg:text-3xl uppercase mx-10 mt-22 md:mt-20 lg:mt-20 w-[80%] lg:w-[55%] leading-loose font-semibold">
          Unlock Your Dream Home with <br />
          <span className="text-4xl md:text-6xl lg:text-8xl font-semibold">
            Brooklyn Homes Limited
          </span>
          <span className="block lg:hidden capitalize mt-5">
            Brooklyn Homes, a modern real estate, building and construction
            company
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
