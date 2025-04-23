import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/durumi-site1/DurumiSite1_3.jpg";
import image2 from "../assets/durumi-site1/DurumiSite1_2.jpg";
import image3 from "../assets/durumi-site1/DurumiSite1_1.jpg";
import image4 from "../assets/durumi-site2/Durumi Site 2 A_1 - Photo.jpg";
import image5 from "../assets/durumi-site2/Durumi Site 2 A_2 - Photo.jpg";
import image6 from "../assets/durumi-site2/Durumi Site 2 A_4 - Photo.jpg";``
import image7 from "../assets/durumi-site2/Durumi Site 2 A_5 - Photo.jpg";
import image8 from "../assets/durumi-site2/Durumi Site 2 A_7 - Photo.jpg";
import image9 from "../assets/durumi-site2/Durumi Site 2 A_8 - Photo.jpg";
import image10 from "../assets/durumi-site2/Durumi Site 2 A_9 - Photo.jpg";
import image11 from "../assets/durumi-site2/Durumi Site 2 A_10 - Photo.jpg";
import image12 from "../assets/durumi-site2/Durumi Site 2 A11.jpg";
import image13 from "../assets/durumi-site2/Durumi Site 2 A12.jpg";

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
  return (
    // <div className="relative text-white h-[70vh] lg:h-screen flex items-center justify-center lg:justify-start bg-[url('/Hero2.jpg')] bg-cover bg-center">
    <div className="relative h-[75vh] md:h-[90vh] w-full">
      {/* <video
          className="relative top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={hero_vid} type="video/mp4" />
        </video> */}
      <Slider {...settings}>
        {images.map((image) => (
          <div className="relative">
            <img
              src={image}
              alt={image}
              className="w-full h-[75vh] md:h-[90vh] object-cover"
            />
          </div>
        ))}
      </Slider>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      {/* Content */}
      <div className="relative z-auto">
        <h1 className="absolute bottom-28 text-white text-sm md:text-lg lg:text-2xl uppercase mx-10 mt-24 md:mt-20 lg:mt-20 w-[80%] lg:w-[55%] leading-loose">
          Unlock Your Dream Home with <br />
          <span className="text-4xl md:text-5xl lg:text-7xl font-semibold">
            Brooklyn Homes Limited
          </span>
        </h1>
        <h1 className="block lg:hidden text-sm md:text-lg w-[80%] mx-10">
          Brooklyn Homes, a modern real estate, building and construction
          company
        </h1>
      </div>
    </div>
  );
};

export default Hero;
