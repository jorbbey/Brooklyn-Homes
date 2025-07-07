import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHardHat } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { IoMdMegaphone } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import slide1 from "../assets/building-construction.jpg";
import slide2 from "../assets/slide2-2.webp";
import slide3 from "../assets/Brooklyn-Homes-Team/dou2.webp";
import slide4 from "../assets/Brooklyn-Homes-Team/dou1.webp";
import { BackgroundContext } from "./BackgroundContext";
const Services = () => {
  const { isDark } = useContext(BackgroundContext);

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
      icon: FaHardHat,
      image: slide4,
      head: "Real Estate Development",
      desc: "We design, build, and deliver top-quality residential and commercial properties that blend aesthetics, functionality, and long-term value",
    },
    {
      icon: FaChartLine,
      image: slide1,
      head: "Real Estate Investment Advisory",
      desc: "We provide sound investment guidance backed by local market insights, helping you grow wealth through real estate with clarity and confidence",
    },
    {
      icon: FaTools,
      image: slide3,
      head: "Facility Management",
      desc: "We maintain and manage residential and commercial buildings with a focus on safety, functionality, and tenant satisfaction",
    },
    {
      icon: MdOutlineRealEstateAgent,
      image: slide1,
      head: "Property Sales",
      desc: "From land to completed homes, we connect buyers with the right real estate investment—honestly priced and professionally managed.",
    },
    {
      icon: FaTasks,
      image: slide3,
      head: "Project Management",
      desc: "Our team handles everything from site supervision to budget control, ensuring your project is completed on time and to the highest standards.",
    },
    {
      icon: IoMdMegaphone,
      image: slide4,
      head: "Property Marketing & Branding",
      desc: "We help you position and promote your property effectively using modern tools—photography, branding, and digital campaigns that convert.",
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
      <h1 className="text-3xl lg:text-4xl my-10 lg:my-20 mx-5">
        What We Offer
      </h1>
      <div
        className={
          isDark
            ? "flex flex-col-reverse lg:flex-row justify-between items-center lg:items-center bg-[url('/background1.webp')] bg-left-top bg-blend-multiply bg-gray-400/100"
            : "flex flex-col-reverse lg:flex-row justify-between items-center lg:items-center bg-[url('/background1.webp')] bg-left-top bg-blend-multiply bg-gray-400/20"
        }
      >
        <main className="grid gap-4 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 my-5 mx-2 md:my-0 w-[95%] lg:w-[95%]"
        >
          {services.map((item) => (
            <div
              key={item.head}
              className="text-center m-auto my-5 p-4 w-[80%] text-gray-950"
            >
              {/* <img
                src={item.image}
                alt={item.head}
                className="w-full h-[30vh] md:h-[40vh] object-cover my-2"
                loading="lazy"
              /> */}
              <item.icon className="text-2xl md:text-3xl lg:text-4xl text-gray-600 w-full" />
              <h1 className="text-lg md:text-xl my-2 md:my-5 w-full font-semibold">
                {item.head}
              </h1>
              <p className="my-3 text-sm">{item.desc}</p>
            </div>
          ))}
        </main>

        {/* <div className="w-full md:w-[80%] lg:w-[50%]">
          <div>
            <img
              src={slide4}
              alt="Slide 1"
              className="w-full h-[30vh] md:h-[50vh] object-cover my-2"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={slide1}
              alt="Slide 3"
              className="w-full h-[30vh] md:h-[50vh] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={slide3}
              alt="Slide 2"
              className="w-full h-[30vh] md:h-[50vh] object-cover my-2"
              loading="lazy"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
