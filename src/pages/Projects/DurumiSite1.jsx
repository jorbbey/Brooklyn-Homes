import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BackgroundContext } from "../../components/BackgroundContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCouch } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { LuConstruction } from "react-icons/lu";
import SubHero from "../../components/SubHero";
import Map from "../../components/Map";
import image1 from "../../assets/durumi-site1/DurumiSite1_3.webp";
import image2 from "../../assets/durumi-site1/DurumiSite1_2.webp";
import image3 from "../../assets/durumi-site1/DurumiSite1_1.webp";
import SEO from "../../components/SEO";

const DurumiSite1 = () => {
  const [scale, setScale] = useState(false);
  const features = [
    {
      icon: FaCouch,
      text: "Spacious living areas",
    },
    {
      icon: FaKitchenSet,
      text: "Modern kitchens",
    },
    {
      icon: FaBed,
      text: "En-suite bedrooms",
    },
    {
      icon: FaCar,
      text: "Ample parking",
    },
  ];

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  const after = [image1, image2, image3];

  const handleClick = () => setScale(!scale);

  const {isDark} = useContext(BackgroundContext)
  return (
    <>
      <SEO
        title="Durumi Site I | Brooklyn Homes"
        description="Discover Durumi Site I by Brooklyn Homes – Six completed 3-bedroom flats in Abuja’s serene Durumi district. Ideal for families seeking spacious living, modern amenities, and secure environments."
        keywords="Durumi Site I, Brooklyn Homes Durumi, 3-bedroom flats Abuja, Abuja family homes, real estate Durumi, completed housing project Abuja, homes for sale in Durumi"
        image="https://brooklynhomesltd.com/DurumiSite1_seo_img.webp"
        url="https://brooklynhomesltd.com/durumisite1"
      />

      <div className={isDark ? "text-white bg-black" : "text-black bg-white"}>
        <SubHero text="Durumi Site I - Residential Bliss" />
        <Link to="/durumisite2">
          <h1 className="text-md hover:underline font-semibold text-[#cf9a1e] my-10 mx-10">
            View Site II →
          </h1>
        </Link>
        <div className="mt-20 w-full m-auto">
          <h1 className="text-3xl my-10">Durumi Site I - Residential Bliss</h1>
          <Map lat={9.026589} lon={7.468901} text="Durumi Site 1" />

          <div className="text-black bg-gray-100 w-full p-10 mt-10 md:mt-16 lg:my-36">
            <div className="w-[95%] m-auto my-5 flex flex-col lg:flex-row justify-between items-start">
              <div className="lg:w-[65%] border-b lg:border-r-1 lg:border-b-0 border-[#cf9a1e]">
                <h1 className="text-2xl md:text-3xl my-5 text-center">
                  Features
                </h1>
                <div className="flex justify-between items-center flex-wrap md:w-full lg:w-[90%] m-auto">
                  {features.map((item) => (
                    <div
                      key={item.text}
                      className="flex flex-col md:flex-row justify-start items-center p-2 w-[50%] md:w-[45%] lg:w-[40%] mb-10 cursor-pointer text-xs"
                    >
                      <item.icon className="text-5xl mx-2 my-4 md:my-0 font-semibold" />
                      <p className="mx-3 text-md md:text-lg">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-[33%]">
                <div className="my-3 border-b-1 border-gray-500 p-2">
                  <h3 className="text-2xl my-3">Status</h3>
                  <p className="flex items-center justify-start my-2 text-[#cf9a1e] ">
                    Under construction{" "}
                    <LuConstruction className="text-2xl text-[#cf9a1e] mx-5" />
                  </p>
                  <p className="text-sm">expected completion by Q4 2025.</p>
                </div>
                <div className="my-3 border-b-1 border-gray-500 p-2">
                  <h3 className="text-2xl my-3 flex items-center justify-start">
                    Ideal For :{" "}
                    <FaUserCheck className="text-2xl text-[#cf9a1e] mx-5" />
                  </h3>
                  <p className="text-sm">
                    Families seeking comfort and convenience in a prime
                    location.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className=" w-[95%] m-auto my-10 lg:mt-40">
            <div className="flex flex-col lg:flex-row justify-around items-start my-5 lg:my-20">
              <h1 className="w-full lg:w-[35%] text-3xl lg:text-5xl text-[#cf9a1e] my-10 lg:my-0">
                Durumi Site I
              </h1>
              <p className="w-full lg:w-[60%]">
                <span className="font-semibold text-[#cf9a1e]">
                  Durumi Site I
                </span>{" "}
                by{" "}
                <span className="font-semibold text-[#cf9a1e]">
                  Brooklyn Homes
                </span>{" "}
                presents six units of elegantly designed 3-bedroom flats in the
                serene Durumi district of Abuja, featuring modern interiors,
                spacious balconies, green spaces, ample parking, and 24/7
                security.
              </p>
            </div>

            {/* <h1 className="text-xl font-semibold">Work in progress ...</h1> */}

            {/* <div className="w-full lg:w-[95%] m-auto my-10 border-1 border-gray-300 rounded-lg">
            <Slider {...settings}>
              {before.map((image) => (
                <div>
                  <img
                    src={image}
                    alt="Slide 1"
                    className="w-[98%] h-96 m-2 object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div> */}

            <h1 className="text-xl font-semibold mt-20">
              Work in progress ...
            </h1>

            <div className="flex flex-col md:flex-row flex-wrap justify-around items-center cursor-pointer my-10">
              {after.map((image) => (
                <img
                  src={image}
                  alt="durumi_site2"
                  key={image}
                  className="w-full md:w-[32%] my-5 md:my-0 hover:brightness-50"
                  loading="lazy"
                />
              ))}
            </div>

            <p className="my-5 text-sm">
              <span className="font-semibold text-[#cf9a1e]">Status:</span>{" "}
              Under construction, expected completion by Q4 2025.
            </p>

            <p className="my-3 text-sm">
              <span className="font-semibold text-[#cf9a1e]">Ideal For:</span>{" "}
              Families seeking comfort and convenience in a prime location.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default DurumiSite1;
