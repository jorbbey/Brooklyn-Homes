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
import whiteLogo from "../assets/logo2.jpg";
import blackLogo from "../assets/logo3.png";
import logo from "../assets/Logo_trans.png"
import { BackgroundContext } from "./BackgroundContext";
import { Link } from "react-router-dom";

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
         link: "/durumisite1",
       },
       {
         text: "Modern Living in the Heart of Abuja",
         image: image5,
         btnText: "Durumi Site II",
         link: "/durumisite2",
       },
       {
         text: "A Lifestyle Upgrade in every Square foot",
         image: image6,
         btnText: "Durumi Site I",
         link: "/durumisite1",
       },
       {
         text: "Your next move starts here",
         image: image7,
         btnText: "Durumi Site II",
         link: "/durumisite2",
       },
       {
         text: "A Lifestyle Upgrade in every Square foot",
         image: image8,
         btnText: "Durumi Site I",
         link: "/durumisite1",
       },
       {
         text: "Secure, stylished, serviced",
         image: image9,
         btnText: "Durumi Site II",
         link: "/durumisite2",
       },
       {
         text: "2025 Smartest Investments",
         image: image10,
         btnText: "Durumi Site I",
         link: "/durumisite1",
       },
       {
         text: "Modern Living in the Heart of Abuja",
         image: image11,
         btnText: "Durumi Site II",
         link: "/durumisite2",
       },
       {
         text: "A Lifestyle Upgrade in every Square foot",
         image: image12,
         btnText: "Durumi Site I",
         link: "/durumisite1",
       },
       {
         text: "Secure, stylished, serviced",
         image: image13,
         btnText: "Durumi Site II",
         link: "/durumisite2",
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
    // <div className="relative h-[50vh] md:h-[70vh] lg:h-[100vh] w-full">
    //      <Link to="/home" className="mx-5">
    //      <i className="mx-2 lg:mx-2 my-4">
    //       <img
    //         src={!isDark ? whiteLogo : blackLogo}
    //         alt="logo"
    //         className="w-[100px] lg:w-[125px]"
    //         loading="lazy"
    //       />
    //     </i>
    //   </Link>
    //   <Slider {...settings}>
    //     {heroItems.map((item) => (
    //       <div className="relative" key={item.text}>
    //         <img
    //           src={item.image}
    //           alt={item.text}
    //           className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] object-cover"
    //           loading="lazy"
    //         />
    //         <div
    //           className={
    //             isDark
    //               ? "absolute inset-0 bg-gradient-to-tr from-gray-700 to-black opacity-65 z-0"
    //               : "absolute inset-0 bg-gradient-to-tr from-gray-700 to-black opacity-50 z-0"
    //           }
    //         ></div>
    //         <div className="absolute bottom-16 md:bottom-20 lg:bottom-40 text-white capitalize mx-5 lg:mx-10 mt-22 md:mt-20 lg:mt-20 w-[90%] md:w-[70%] lg:w-[55%] leading-loose font-semibold">
    //           <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
    //             {item.text}
    //           </p>
    //           <Link to={item.link}>
    //             <button className="bg-[#cf9a1e] mt-10 text-xs lg:text-sm p-3 lg:p-5 w-40 uppercase cursor-pointer">
    //               {item.btnText} →
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>

    <div className="relative h-[50vh] md:h-[70vh] lg:h-[100vh] w-full">
      {/* LOGO positioned absolutely */}
      <Link
        to="/home"
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <img
          // src={!isDark ? whiteLogo : blackLogo}
          src={logo}
          alt="logo"
          className="w-[115px] md:w-[135px] lg:w-[175px]"
          loading="lazy"
        />
      </Link>

      {/* SLIDER */}
      <Slider {...settings}>
        {heroItems.map((item) => (
          <div className="relative" key={item.text}>
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-[50vh] md:h-[70vh] lg:h-[100vh] object-cover"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-tr from-gray-700 to-black opacity-65"
                  : "bg-gradient-to-tr from-gray-700 to-black opacity-50"
              } z-0`}
            ></div>

            {/* Text & Button */}
            <div className="absolute bottom-16 md:bottom-20 lg:bottom-40 text-white capitalize mx-5 lg:mx-10 w-[90%] md:w-[70%] lg:w-[55%] leading-loose font-semibold z-10">
              <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                {item.text}
              </p>
              <Link to={item.link}>
                <button className="bg-[#cf9a1e] mt-10 text-xs lg:text-sm p-3 lg:p-5 w-40 uppercase cursor-pointer">
                  {item.btnText} →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
