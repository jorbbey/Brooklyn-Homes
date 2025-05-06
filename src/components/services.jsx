import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBuilding } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import slide1 from '../assets/building-construction.jpg'
import slide2 from '../assets/slide2-2.webp'
import slide3 from '../assets/slide3-3.jpg'
import slide4 from '../assets/slide4-2.avif'
const Services = () => {

    const settings = {
      arrows: false,
      dots: false, // Show navigation dots
      infinite: true, // Infinite loop scrolling
      speed: 500, // Animation speed
      slidesToShow: 1, // Number of slides visible at once
      slidesToScroll: 1, // Number of slides to scroll per action
      autoplay: true, // Auto slide change
      autoplaySpeed: 3000, // Time before auto-slide
    };


    const services = [
      {
        icon: FaBuilding,
        head: "Property Development",
        desc: "Crafting modern, sustainable residential spaces.",
      },
      {
        icon: FaMoneyBillWave,
        head: "Real Estate Investment",
        desc: "Unlocking high-return opportunities for investors.",
      },
      {
        icon: FaTools,
        head: "Facility Management",
        desc: "Ensuring your property thrives with expert care.",
      },
      {
        icon: FaHandshake,
        head: "Investment Advisory Services",
        desc: "Guiding you to smart, future-proof decisions.",
      },
    ];
  return (
    <section className="my-30">
      <h1 className="text-3xl lg:text-4xl my-20 mx-5">Services We Offer</h1>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <main className="flex flex-wrap items-center justify-between lg:justify-start w-full md:w-[90%] lg:w-[70%]">
          {services.map((item) => (
            <div
              key={item.head}
              className="text-center m-10 p-4 w-[90%] md:w-[35%]"
            >
              <item.icon className="text-4xl text-[#bc963f] w-full" />
              <h1 className="text-xl my-5 w-full text-gray-300">{item.head}</h1>
              <p className="my-3 text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </main>

        <div className="w-[90%] lg:w-[50%]">
          <Slider {...settings}>
            <div>
              <img
                src={slide1}
                alt="Slide 1"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={slide2}
                alt="Slide 3"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={slide3}
                alt="Slide 3"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={slide4}
                alt="Slide 2"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Services