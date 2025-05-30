import React, {useState, useContext} from "react";
import { BackgroundContext } from "../components/BackgroundContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBuilding } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6"; 
import { HiOutlineHomeModern } from "react-icons/hi2";
import { PiBuildingApartment } from "react-icons/pi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiCrane } from "react-icons/gi";
import { BsHouseCheck } from "react-icons/bs";
import { PiCraneTowerBold } from "react-icons/pi";
import trioTeam from "../assets/Brooklyn-Homes-Team/trio1.webp";
import trioTeam2 from "../assets/Brooklyn-Homes-Team/tio3.webp";
import johnSeth from "../assets/Brooklyn-Homes-Team/john-seth.webp";
import anthony from "../assets/Brooklyn-Homes-Team/anthony.webp";
import dou from "../assets/Brooklyn-Homes-Team/dou2.webp";
import image1 from "../assets/Brooklyn-Homes-Team/dou1.webp";
import image2 from "../assets/family.jpg";
import image3 from "../assets/building-construction.jpg";
import m1 from "../assets/durumi-site1/DurumiSite1_1.webp";
import m2 from "../assets/durumi-site1/DurumiSite1_2.webp";
import m3 from "../assets/durumi-site1/DurumiSite1_3.webp";
import SubHero from "../components/SubHero";
import Typewritter from "../components/Typewritter";
import SEO from "../components/SEO";
import Counter from "../components/Counter";
import SlideIn from "../components/SlideIn";
const AboutPage = () => {
  const [selectedExec, setSelectedExec] = useState(null);
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
  const objectives = [
    // {
    //   icon: FaHandshake,
    //   head: "Helping Clients Win",
    //   desc: "We simplify buying, selling, and investing with a seamless, stress-free process.",
    // },
    // {
    //   icon: FaMoneyBillWave,
    //   head: "Luxury & Investment Excellence",
    //   desc: "We deliver premium properties and high-yield opportunities.",
    // },
    // {
    //   icon: FaTools,
    //   head: "Integrity & Trust",
    //   desc: "We build lasting relationships grounded in honesty and professionalism.",
    // },
    // {
    //   icon: FaBuilding,
    //   head: "Community Growth",
    //   desc: "We connect people with homes that enhance neighborhoods and lives.",
    // },
    {
      icon: FaHandshake,
      head: "Team Spirit",
      desc: "We connect people with homes that enhance neighborhoods and lives.",
    },
    {
      icon: FaMoneyBillWave,
      head: "Client-Centric",
      desc: "We connect people with homes that enhance neighborhoods and lives.",
    },
    {
      icon: FaBuilding,
      head: "Excellence",
      desc: "We connect people with homes that enhance neighborhoods and lives.",
    },
    {
      icon: FaHandshake,
      head: "integrity",
      desc: "We connect people with homes that enhance neighborhoods and lives.",
    },
    {
      icon: FaTools,
      head: "Innovation",
      desc: "We connect people with homes that enhance neighborhoods and lives.",
    },
    {
      icon: FaHandshake,
      head: "Passion",
      desc: "We connect people with homes that enhance neighborhoods and lives.",
    },
  ];

  const status = [
    {
      icon: HiOutlineHomeModern,
      num: 1,
      text: "Completed projects",
    },
    {
      icon: PiBuildingApartment,
      num: 1,
      text: "Green building under construction",
    },
    {
      icon: PiCraneTowerBold,
      num: 2,
      text: "Projects underway",
    },
    {
      icon: MdOutlineRealEstateAgent,
      num: 2,
      text: "Years of experience",
    },
  ];

  const {isDark} = useContext(BackgroundContext)

  return (
    <>
      <SEO
        title="About Us | Brooklyn Homes"
        description="Learn about Brooklyn Homes – our mission, core values, and the dedicated team driving excellence in real estate development, construction, and property management."
        keywords="About Brooklyn Homes, real estate company, construction experts, property management team, company mission, real estate development"
        image="https://brooklynhomesltd.com/homepage_seo_img.webp"
        url="https://brooklynhomesltd.com/about"
      />
      <section
        className={isDark ? "bg-black text-white" : "bg-white text-black"}
      >
        <SlideIn>
          <SubHero text="about us" />
        </SlideIn>

        <div className={isDark ? "my-10 p-2" : "bg-gray-100 my-10 p-2"}>
          <p className=" m-auto w-[90%] lg:w-3/4 text-center text-[#cf9a1e] font-bold animate-bounce">
            <span className="text-lg lg:text-xl mx-1">Our Vision:</span> To be
            Abuja’s leading real estate firm by 2030, known for quality and
            innovation.
          </p>
        </div>

        {/* <p className="w-[95%] lg:w-[50%] text-2xl md:text-4xl lg:text-5xl mx-auto lg:mx-5 leading-normal">
          To redefine the real estate experience by delivering premium
          properties and unparalleled customer satisfaction.
        </p> */}

        {/* banner */}
        <SlideIn>
          <div className="flex justify-around items-center my-20 overflow-x-auto">
            <div className="w-[200%] flex justify-around items-center gap-12">
              {status.map((stat, index) => (
                <div className="w-24 md:w-39 mx-4" key={index}>
                  <div className="relative">
                    <Counter num={stat.num} text={stat.text} />
                    <i className="flex justify-center items-center">
                      <stat.icon
                        className={
                          isDark
                            ? "text-6xl md:text-7xl lg:text-8xl text-[#333333]"
                            : "text-6xl md:text-7xl lg:text-8xl text-gray-200"
                        }
                      />
                    </i>
                  </div>
                  <p
                    className={
                      isDark
                        ? "my-5 text-xs md:text-sm lg:text-lg text-[#6d6969]"
                        : "my-5 text-xs md:text-sm lg:text-lg text-gray-900"
                    }
                  >
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SlideIn>

        <SlideIn>
          <div
            className={
              isDark
                ? "bg-black flex flex-col lg:flex-row justify-between items-start my-20"
                : "bg-[url('background2.webp')] bg-gradient-to-tr bg-no-repeat bg-right-top bg-blend-multiply bg-gray-200/50 flex flex-col lg:flex-row justify-between items-start my-20"
            }
          >
            <div className="w-[98%] lg:w-[45%] m-auto lg:m-0">
              <SlideIn>
                <div
                  className={
                    isDark ? "mb-5 brightness-75" : "mb-5 brightness-100"
                  }
                >
                  <img
                    src={trioTeam}
                    alt="brooklynhomes trio team"
                    loading="lazy"
                  />
                </div>
              </SlideIn>
              <div className="my-5">
                <Slider {...settings}>
                  <p className="text-[#cf9a1e] text-md md:text-xl mx-28 md:mx-64 lg:mx-44">
                    Mr. John Seth
                  </p>
                  <p className="text-[#cf9a1e] text-md md:text-xl mx-28 md:mx-64 lg:mx-44">
                    Mr. Anthony Onuoha
                  </p>
                  <p className="text-[#cf9a1e] text-md md:text-xl mx-28 md:mx-64 lg:mx-44">
                    Mr. Chidubem Ogbuehi
                  </p>
                </Slider>
              </div>
            </div>

            <div className="w-[90%] lg:w-[50%] m-auto lg:my-5 lg:mx-0">
              <h1 className="text-xl text-center lg:text-left font-semibold mt-10 lg:mt-30">
                Our <br /> <span className="text-5xl">Story</span>
              </h1>
              <div className="">
                <p className="text-sm md:text-md leading-loose my-5 lg:my-10">
                  <span className="text-[#cf9a1e] font-bold">
                    Brooklyn Homes Limited
                  </span>{" "}
                  was born in August 2023 with a bold vision:{" "}
                  <span className="font-bold mx-1">
                    to transform the real estate landscape in Abuja, Nigeria.
                  </span>{" "}
                  <br /> <br /> Situated at the Central Business District, we’ve
                  quickly established ourselves as a trusted name in property
                  development and investment. Our journey began with a small,
                  dedicated team of experts who saw an opportunity to blend
                  luxury, sustainability, and affordability in Nigeria’s capital
                  city. Today, we’re proud to offer a diverse portfolio of
                  services, from developing contemporary residential units to
                  providing expert facility management & investment advisory
                  services . <br /> <br />
                  Led by a trio of seasoned professionals—
                  <span className="text-[#cf9a1e] mx-1 font-semibold">
                    Mr. John Seth, Mr. Anthony Onuoha, and Mr. Chidubem Ogbuehi
                  </span>
                  —our team brings decades of collective experience to every
                  project. <br /> At Brooklyn Homes we don't just build
                  properties, we build trust, peace of mind and legacies.
                </p>
              </div>
              <button className="bg-[#cf9a1e] text-white text-md py-3 px-6 mt-6 text-xs flex items-center cursor-pointer uppercase">
                Schedule Visit
                <FaArrowRightLong className="ml-2" />
              </button>
            </div>
          </div>
        </SlideIn>

        <SlideIn>
          <div className="bg-[url('/background1.webp')] bg-left-top bg-blend-multiply bg-gray-400/20 my-10 lg:my-0">
            <h3 className="w-3/4 mx-10 pt-20 text-md md:text-lg lg:text-4xl text-center lg:text-left">
              Our Core Values
            </h3>
            <div className="flex flex-col-reverse lg:flex-row justify-around items-start my-12">
              <div className="flex flex-col md:flex-row flex-wrap justify-around items-center gap-4 lg:w-[50%] my-5">
                {objectives.map((item) => (
                  <SlideIn>
                    <div
                      key={item.head}
                      className="p-2 w-full md:w-80 my-5 list-none text-center md:text-left cursor-pointer flex flex-col md:flex-row justify-center md:justify-between gap-4 items-center"
                    >
                      <div className="bg-white flex justify-center items-center p-4 rounded-full w-20 h-20">
                        <item.icon className="text-7xl text-gray-600" />
                      </div>
                      <h4 className="font-bold text-lg my-2 text-black capitalize">
                        {item.head}
                        <p className="my-2 text-xs text-gray-900 font-medium">
                          {item.desc} {item.desc}
                        </p>
                      </h4>
                    </div>
                  </SlideIn>
                ))}
              </div>

              <img src={dou} alt="core values" className="lg:w-[45%]" />
            </div>
          </div>
        </SlideIn>

        <SlideIn>
          <div className="my-20">
            <h1 className="text-2xl mx-auto text-center my-10">
              What we offer
            </h1>
            <ul className="mx-5">
              <SlideIn>
                <li className="flex flex-col-reverse lg:flex-row justify-between items-center my-10">
                  <p className="text-md md:text-lg flex items-center justify-center lg:mx-5 my-5">
                    <GoDash className="hidden lg:block text-xl font-semibold mx-2" />
                    <Typewritter
                      text="Tailored property solutions for homeowners and investors."
                      speed={80}
                    />
                  </p>
                  <img
                    src={image3}
                    alt="image1"
                    className="w-full lg:w-1/2 h-96 object-cover"
                    loading="lazy"
                  />
                </li>
              </SlideIn>
              <SlideIn>
                <li className="flex flex-col lg:flex-row justify-between items-center my-10">
                  <img
                    src={image2}
                    alt="image2"
                    className="w-full lg:w-1/2 h-96 object-cover"
                    loading="lazy"
                  />
                  <p className="text-md md:text-lg flex items-center justify-center lg:mx-5 my-5">
                    <GoDash className="hidden lg:block text-xl font-semibold mx-2" />
                    <Typewritter
                      text="Cutting-edge designs that prioritize comfort, style, and
              sustainability."
                      speed={80}
                    />
                  </p>
                </li>
              </SlideIn>
              <SlideIn>
                <li className="flex flex-col-reverse lg:flex-row justify-between items-center my-10">
                  <p className="text-md md:text-lg flex items-center justify-center lg:mx-5 my-5">
                    <GoDash className="hidden lg:block text-xl font-semibold mx-2" />
                    <Typewritter
                      text=" A client-first approach that ensures your goals are our priority."
                      speed={80}
                    />
                  </p>
                  <img
                    src={image1}
                    alt="image3"
                    className="w-full lg:w-1/2 h-96 object-cover"
                    loading="lazy"
                  />
                </li>
              </SlideIn>
            </ul>
          </div>
        </SlideIn>

        <SlideIn>
          <div className="w-[90%] lg:w-[70%] m-auto my-20">
            <h3 className="my-10">
              <span className="text-xl mx-1">Milestone:</span> Complete our
              first project--Durumi Site 1--within 18 months of inception.
            </h3>

            <div>
              <Slider {...settings}>
                <div>
                  <img
                    src={m1}
                    alt="Slide 1"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img
                    src={m2}
                    alt="Slide 3"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img
                    src={m3}
                    alt="Slide 3"
                    className="w-full h- object-cover"
                    loading="lazy"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </SlideIn>
      </section>
    </>
  );
};

export default AboutPage;
