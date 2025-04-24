import React from "react";
import { Link } from "react-router-dom";
import { FaCity } from "react-icons/fa";
import { FaSolarPanel } from "react-icons/fa";
import { LuTrees } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";
import SubHero from "../../components/SubHero";
import Map from "../../components/Map";
import image1 from "../../assets/durumi-site2/Durumi Site 2 A_1 - Photo.webp";
import image2 from "../../assets/durumi-site2/Durumi Site 2 A_2 - Photo.webp";
import image4 from "../../assets/durumi-site2/Durumi Site 2 A_4 - Photo.webp";``
import image5 from "../../assets/durumi-site2/Durumi Site 2 A_5 - Photo.webp";
import image7 from "../../assets/durumi-site2/Durumi Site 2 A_7 - Photo.webp";
import image8 from "../../assets/durumi-site2/Durumi Site 2 A_8 - Photo.webp";
import image9 from "../../assets/durumi-site2/Durumi Site 2 A_9 - Photo.webp";
import image10 from "../../assets/durumi-site2/Durumi Site 2 A_10 - Photo.webp";
import image11 from "../../assets/durumi-site2/Durumi Site 2 A11.webp";
import image12 from "../../assets/durumi-site2/Durumi Site 2 A12.webp";
import SEO from "../../components/SEO";

const DurumiSite2 = () => {
  const features = [
    {
      icon: FaCity,
      text: "Contemporary architecture",
    },
    {
      icon: FaSolarPanel,
      text: "Energy-efficient designs",
    },
    {
      icon: LuTrees,
      text: "Communal green spaces",
    },
    {
      icon: MdSecurity,
      text: "24/7 security",
    },
  ];

  const images = [
    image1,
    image2,
    image4,
    image9,
    image7,
    image8,
    image5,
    image10,
    image11,
  ];
  return (
    <>
      <SEO
        title="Durumi Site II | Brooklyn Homes"
        description="Explore Durumi Site II by Brooklyn Homes – A mixed-development estate featuring 3-bedroom, 2-bedroom, and 1-bedroom flats in Abuja’s Durumi district. Designed with energy-efficient architecture, communal green spaces, and top-tier amenities, it's perfect for professionals, families, and investors."
        keywords="Durumi Site II, Brooklyn Homes Abuja, 3-bedroom flats Abuja, energy-efficient homes Nigeria, real estate Durumi, Abuja rental investment, new development Abuja"
        image="https://brooklynhomesltd.com/DurumiSite2_seo_img.webp"
        url="https://brooklynhomesltd.com/durumisite2"
      />

      <div className="text-white">
        <SubHero text="Durumi Site II - Versatile Living Options" />
        <Link to="/durumisite1">
          <h1 className="text-sm hover:underline text-[#bc963f] my-10 mx-10">
            View Site I →
          </h1>
        </Link>
        <div className="my-20 w-[95%] m-auto">
          <h1 className="text-3xl my-10">
            Durumi Site II - Versatile Living Options
          </h1>
          <Map lat={9.026589} lon={7.468901} text="Durumi Site 2" />

          <div className="mt-10 md:mt-16 lg:my-36 flex flex-col lg:flex-row justify-between items-start">
            <div className="lg:w-[65%] border-b lg:border-r-1 lg:border-b-0 border-[#bc963f]">
              <h1 className="text-2xl md:text-3xl my-5 text-center">
                Features
              </h1>
              <div className="flex justify-between items-center flex-wrap md:w-full lg:w-[90%] m-auto ">
                {features.map((item) => (
                  <div
                    key={item.text}
                    className="flex flex-col md:flex-row justify-start items-center p-2 w-[50%] md:w-[45%] lg:w-[40%] mb-10 cursor-pointer text-xs"
                  >
                    <item.icon className="bg-white rounded-full text-5xl md:text-6xl p-3 mx-2 my-4 md:my-0 font-semibold text-black" />
                    <p className="mx-3 text-md md:text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className=" mx-2 w-full lg:w-[33%]">
              <div className="my-3 border-b-1 border-gray-500 p-2">
                <h3 className="text-2xl my-3">Status</h3>
                <p className="flex items-center justify-start my-2 text-[#bc963f] ">
                  Under construction{" "}
                  <LuConstruction className="text-2xl text-[#bc963f] mx-5" />
                </p>
                <p className="text-sm">expected completion by Q4 2025.</p>
              </div>
              <div className="my-3 border-b-1 border-gray-500 p-2">
                <h3 className="text-2xl my-3 flex items-center justify-start">
                  Ideal For :{" "}
                  <FaUserCheck className="text-2xl text-[#bc963f] mx-5" />
                </h3>
                <p className="text-sm">
                  Young professionals, small families, and investors looking for
                  rental income potential.
                </p>
              </div>
            </div>
          </div>

          <section className="my-10 lg:my-40">
            <div className="flex flex-col lg:flex-row justify-around items-start my-5 lg:my-20">
              <h1 className=" w-full lg:w-[35%] text-3xl lg:text-5xl text-[#bc963f] my-10 lg:my-0">
                Durumi Site II
              </h1>

              <p className="w-full lg:w-[60%] text-gray-300">
                <span className="font-semibold text-[#bc963f]">
                  Durumi Site II
                </span>{" "}
                by{" "}
                <span className="font-semibold text-[#bc963f]">
                  Brooklyn Homes
                </span>{" "}
                presents a vibrant mixed-development site featuring sixteen
                spacious 3-bedroom flats, five modern 1-bedroom flats, and one
                cozy 2-bedroom flat. The estate boasts contemporary
                architecture, energy-efficient designs, lush communal green
                spaces, ample parking, and 24/7 security. Residents can enjoy
                top-tier amenities, including a fully equipped gym, a children's
                play area, and serene walking paths.
              </p>
            </div>

            <h1 className="text-xl font-semibold mt-40">Proposed</h1>

            <div className="flex flex-col md:flex-row flex-wrap justify-around items-center cursor-pointer my-10">
              {images.map((image) => (
                <img
                  src={image}
                  alt="durumi_site2"
                  key={image}
                  className="w-full md:w-[32%] my-5 md:my-2 hover:brightness-50"
                  loading="lazy"
                />
              ))}
            </div>

            <p className="my-5 text-sm">
              <span className="font-semibold text-[#bc963f]">Status:</span>{" "}
              Under construction, expected completion by Q4 2025.
            </p>
            <p className="my-5 text-sm">
              <span className="font-semibold text-[#bc963f]">Ideal For:</span>{" "}
              Young professionals, small families, and investors looking for
              rental income potential.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default DurumiSite2;
