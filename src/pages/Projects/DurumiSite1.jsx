import React from 'react'
import { FaCouch } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import SubHero from "../../components/SubHero";
import Map from '../../components/Map';
import image1 from '../../assets/durumi-site1/DurumiSite1_1.jpg'
import image2 from "../../assets/durumi-site1/DurumiSite1_2.jpg";
import image3 from "../../assets/durumi-site1/DurumiSite1_3.jpg";

import Typewritter from '../../components/Typewritter';
const DurumiSite1 = () => {
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

  const images = [image1, image2, image3]
  return (
    <div className="text-white">
      <SubHero text="Durumi Site I - Residential Bliss" />

      <div className="my-40 w-[95%] m-auto">
        <h1 className="text-3xl my-10">Durumi Site I - Residential Bliss</h1>
        <Map lat={9.026589} lon={7.468901} text="Durumi Site 1" />

        <div className="my-36">
          <h1 className="text-2xl md:text-3xl my-5 text-center">Features</h1>
          <div className="flex justify-between items-center flex-wrap md:w-full lg:w-[90%] m-auto">
            {features.map((item) => (
              <div
                key={item.text}
                className="flex justify-start items-center p-4  w-full md:w-[45%] lg:w-[35%] mb-10 cursor-pointer"
              >
                <item.icon className="bg-white rounded-full text-6xl p-4 mx-2 font-semibold text-black" />
                <p className="mx-3 text-md md:text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="my-10 lg:my-40">
          <div className="flex flex-col lg:flex-row justify-around items-start my-5 lg:my-20">
            <h1 className="w-full lg:w-[35%] text-3xl lg:text-5xl text-[#bc963f] my-10 lg:my-0">
              Durumi Site I
            </h1>
            <p className="w-full lg:w-[60%] text-gray-300">
              <span className="font-semibold text-[#bc963f]">
                Durumi Site I
              </span>{" "}
              by{" "}
              <span className="font-semibold text-[#bc963f]">
                Brooklyn Homes
              </span>{" "}
              presents six units of elegantly designed 3-bedroom flats in the
              serene Durumi district of Abuja, featuring modern interiors,
              spacious balconies, green spaces, ample parking, and 24/7
              security.
            </p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-around items-center cursor-pointer my-40">
            {images.map((image) => (
              <img
                src={image}
                alt="durumi_site2"
                key={image}
                className="w-full md:w-[32%] my-5 md:my-0 hover:brightness-50"
              />
            ))}
          </div>

          <p className="my-3 text-sm">
            <span className="font-semibold text-[#bc963f]">Status:</span>{" "}
            Completed and available for sale as of March 2025.
          </p>

          <p className="my-3 text-sm">
            <span className="font-semibold text-[#bc963f]">Ideal For:</span>{" "}
            Families seeking comfort and convenience in a prime location.
          </p>
        </section>
      </div>
    </div>
  );
}

export default DurumiSite1