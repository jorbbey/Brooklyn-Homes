import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstImage from "../assets/estate2.jpg";
import secondImage from "../assets/estate-1.jpg";
const Hero = () => {
  return (
    <div className="relative text-white h-screen flex items-center justify-start bg-[url('src/assets/estate2.jpg')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
      <div className="relative z-10">
        <h1 className="text-white text-2xl uppercase mx-10 mt-60 w-[55%] leading-loose">
          Unlock Your Dream Home with <br />
          <span className="text-7xl font-semibold">Brooklyn Homes Limited</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero