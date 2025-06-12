import React, {useContext} from "react";
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
import { BackgroundContext } from "./BackgroundContext";

const Hero = () => {

      const { isDark } = useContext(BackgroundContext);

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

     const heroItems = [
       {
         text: "Unlock your dream home with Brooklyn Homes",
         image: image4,
         btnText: "Durumi Site I",
       },
       {
         text: "Modern Living in the Heart of Abuja",
         image: image5,
         btnText: "Durumi Site II",
       },
       {
         text: "A Lifestyle Upgrade in every Square foot",
         image: image6,
         btnText: "Durumi Site I",
       },
       {
         text: "Your next move starts here",
         image: image7,
         btnText: "Durumi Site II",
       },
       {
         text: "A Lifestyle Upgrade in every Square foot",
         image: image8,
         btnText: "Durumi Site I",
       },
       {
         text: "Secure, stylished, serviced",
         image: image9,
         btnText: "Durumi Site II",
       },
       {
         text: "2025 Smartest Investments",
         image: image10,
         btnText: "Durumi Site I",
       },
       {
         text: "Modern Living in the Heart of Abuja",
         image: image11,
         btnText: "Durumi Site II",
       },
       {
         text: "A Lifestyle Upgrade in every Square foot",
         image: image12,
         btnText: "Durumi Site I",
       },
       {
         text: "Secure, stylished, serviced",
         image: image13,
         btnText: "Durumi Site II",
       },
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
    <div className="relative h-[50vh] md:h-[70vh] lg:h-[100vh] w-full">
      <Slider {...settings}>
        {heroItems.map((item) => (
          <div className="relative">
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] object-cover"
              loading="lazy"
            />
            <div
              className={
                isDark
                  ? "absolute inset-0 bg-gradient-to-tr from-gray-700 to-black opacity-65 z-0"
                  : "absolute inset-0 bg-gradient-to-tr from-gray-700 to-black opacity-50 z-0"
              }
            ></div>
            <div className="absolute bottom-16 md:bottom-20 lg:bottom-40 text-white capitalize mx-5 lg:mx-10 mt-22 md:mt-20 lg:mt-20 w-[90%] md:w-[70%] lg:w-[55%] leading-loose font-semibold">
              <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                {item.text}
              </p>
              <button className="bg-[#cf9a1e] mt-10 text-xs lg:text-sm p-3 lg:p-5 w-40 uppercase cursor-pointer">
                {item.btnText} →
              </button>
            </div>
          </div>
        ))}
      </Slider>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-65 z-0"></div> */}
      {/* Content */}
      {/* <div className="relative z-auto">
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
      </div> */}
    </div>
  );
};

export default Hero;
