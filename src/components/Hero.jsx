import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  return (
    <div className="relative text-white h-[70vh] lg:h-screen flex items-center justify-center lg:justify-start bg-[url('/Hero2.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-white text-sm md:text-lg lg:text-2xl uppercase mx-10 mt-24 md:mt-20 lg:mt-20 w-[80%] lg:w-[55%] leading-loose">
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
