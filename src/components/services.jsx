import React, {useContext} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBuilding } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import slide1 from '../assets/building-construction.jpg'
import slide2 from '../assets/slide2-2.webp'
import slide3 from '../assets/Brooklyn-Homes-Team/dou2.webp'
import slide4 from "../assets/Brooklyn-Homes-Team/dou1.webp";
import { BackgroundContext } from './BackgroundContext';
const Services = () => {
  
  const {isDark} = useContext(BackgroundContext);

    const settings = {
      arrows: false,
      dots: false, 
      infinite: true, 
      speed: 500, 
      slidesToShow: 1, 
      slidesToScroll: 1, 
      autoplay: true,
      autoplaySpeed: 3000, 
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
    <section
      className={
        isDark
          ? "bg-black text-white my-10 md:my-30"
          : "bg-white text-gray-950 my-10 md:my-30"
      }
    >
      <h1 className="text-3xl lg:text-4xl my-20 mx-5">What We Offer</h1>
      <div
        className={
          isDark
            ? "flex flex-col-reverse lg:flex-row justify-between items-end bg-[url('/background1.webp')] bg-left-top bg-blend-multiply bg-gray-400/80"
            : "flex flex-col-reverse lg:flex-row justify-between items-end bg-[url('/background1.webp')] bg-left-top bg-blend-multiply bg-gray-400/20"
        }
      >
        <main className="flex flex-wrap items-center justify-between lg:justify-start w-full md:w-[90%] lg:w-[70%]">
          {services.map((item) => (
            <div
              key={item.head}
              className="text-center m-10 p-4 w-[90%] md:w-[35%] text-gray-950"
            >
              <item.icon className="text-4xl text-gray-600 w-full" />
              <h1 className="text-xl my-5 w-full">{item.head}</h1>
              <p className="my-3 text-sm">{item.desc}</p>
            </div>
          ))}
        </main>

        <div className="w-full md:w-[90%] lg:w-[50%]">
          <Slider {...settings}>
            <div>
              <img
                src={slide1}
                alt="Slide 1"
                className="w-full h-[90vh] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={slide3}
                alt="Slide 3"
                className="w-full h-[90vh] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={slide4}
                alt="Slide 2"
                className="w-full h-[90vh] object-cover"
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