import React, { useState, useContext } from "react";
import { BackgroundContext } from "../components/BackgroundContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDash } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { PiBuildingApartment } from "react-icons/pi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { GiJusticeStar } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { PiCraneTowerBold } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
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
import m4 from "../assets/durumi-site1/DurumiSite1_4.webp";
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
    {
      icon: FaUser,
      head: "Team Spirit",
      desc: "Our strength lies in collaboration. We work seamlessly across teams, partners, and clients to achieve shared success",
    },
    {
      icon: FaHandshake,
      head: "Client-Centric",
      desc: "Your goals are our priority. We listen, we advise, and we tailor our services to meet your unique needs and expectations",
    },
    {
      icon: FaMedal,
      head: "Excellence",
      desc: "We deliver quality without compromise, from concept to completion. Every detail matters, and we treat each project as a reflection of our reputation.",
    },
    {
      icon: GiJusticeStar,
      head: "integrity",
      desc: "We uphold the highest standards of honesty and transparency in every project, deal, and client relationship—because trust is the foundation of everything we build.",
    },
    {
      icon: FaLightbulb,
      head: "Innovation",
      desc: "We embrace modern design, smart building methods, and fresh thinking to stay ahead in a fast changing real estate market.",
    },
    {
      icon: FaBriefcase,
      head: "Professionalism",
      desc: "We operate with discipline, expertise, and respect—committed to timelines, communication, and delivering on our promises",
    },
    {
      icon: FaLeaf,
      head: "Sustainability",
      desc: "We build with the future in mind—prioritizing energy efficiency, eco-friendly materials, and developments that benefit people and the planet",
    },
    {
      icon: IoMdTrendingUp,
      head: "Growth",
      desc: "We’re always evolving—learning from each experience and improving our services to create more value for our clients, investors, and community",
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

  const { isDark } = useContext(BackgroundContext);

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
                ? "bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full my-20"
                : "bg-[url('background2.webp')] bg-gradient-to-tr bg-no-repeat bg-right-top bg-blend-multiply bg-gray-200/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full my-20"
            }
          >
            <div className="w-[98%] md:w-[95%] m-auto my-10 lg:m-0">
              <SlideIn>
                <div
                  className={
                    isDark
                      ? "mb-5 brightness-75 w-full"
                      : "mb-5 brightness-100 w-full"
                  }
                >
                  <img
                    src={trioTeam2}
                    alt="brooklynhomes trio team"
                    loading="lazy"
                    className="w-full h-[50vh] md:h-[75vh] lg:h-[100vh] object-cover"
                  />
                </div>
              </SlideIn>
              <div className="my-5 text-center">
                <Slider {...settings}>
                  <p className="text-[#cf9a1e] text-md md:text-xl">
                    Mr. John Seth
                  </p>
                  <p className="text-[#cf9a1e] text-md md:text-xl">
                    Mr. Anthony Onuoha
                  </p>
                  <p className="text-[#cf9a1e] text-md md:text-xl">
                    Mr. Chidubem Ogbuehi
                  </p>
                </Slider>
              </div>
            </div>

            <div className=" w-[95%] md:w-[98%] m-auto md:my-5 lg:mx-0">
              <h1 className="text-xl text-center md:text-left font-semibold mt-10 lg:mt-2">
                Our <br /> <span className="text-5xl">Story</span>
              </h1>
              <div className="">
                <p className="text-sm md:text-md leading-loose my-5">
                  Brooklyn Homes Limited was founded with a clear vision — to
                  bridge the gap between property ownership dreams and quality
                  real estate delivery in Nigeria. What began as a small,
                  purpose-driven venture has grown into a dynamic real estate
                  development company committed to creating affordable, stylish,
                  and enduring homes across Abuja and beyond. <br /> <br /> Our
                  journey started with a desire to offer more than just
                  buildings. We wanted to redefine what it means to invest in
                  real estate by prioritizing client trust, construction
                  integrity, and market insight. Over the years, we’ve developed
                  a reputation for excellence by delivering successful
                  residential and commercial projects, managing investments with
                  transparency, and providing end-to-end property solutions.{" "}
                  <br /> <br />
                  <span className="block md:hidden lg:block">
                    At our core, we believe that real estate should be
                    accessible, profitable, and impactful. That’s why we’ve
                    built a team of experienced professionals who are passionate
                    about innovation, service, and sustainable growth. Every
                    project we undertake is a step toward building not just
                    properties, but communities — where families thrive,
                    investors gain, and cities evolve. <br /> <br /> Brooklyn
                    Homes continues to grow through meaningful relationships and
                    a steadfast commitment to delivering value. Our story is
                    still being written — and we invite you to be a part of it.
                  </span>
                </p>
              </div>

              <div className="flex md:hidden lg:flex items-center justify-end lg:justify-start">
                <button className="bg-[#cf9a1e] text-white text-md py-4 px-6 mt-6 mb-6 lg:mt-3 lg:mb-0 text-xs flex items-center cursor-pointer uppercase">
                  Schedule Visit
                  <FaArrowRightLong className="ml-2" />
                </button>
              </div>
            </div>
            <div className="hidden md:block lg:hidden w-[98%] m-auto col-span-2 -mt-20">
              <p className="text-sm md:text-md leading-loose my-5">
                At our core, we believe that real estate should be accessible,
                profitable, and impactful. That’s why we’ve built a team of
                experienced professionals who are passionate about innovation,
                service, and sustainable growth. Every project we undertake is a
                step toward building not just properties, but communities —
                where families thrive, investors gain, and cities evolve. <br />{" "}
                <br /> Brooklyn Homes continues to grow through meaningful
                relationships and a steadfast commitment to delivering value.
                Our story is still being written — and we invite you to be a
                part of it.
              </p>
              <div className="flex items-center justify-end lg:justify-start">
                <button className="bg-[#cf9a1e] text-white text-md py-4 px-6 mt-6 mb-6 lg:mt-3 lg:mb-0 text-xs flex items-center cursor-pointer uppercase">
                  Schedule Visit
                  <FaArrowRightLong className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </SlideIn>

        <SlideIn>
          <div
            className={
              isDark
                ? "bg-[url('/background1.webp')] bg-left-top bg-blend-multiply bg-gray-600/50 my-10 lg:my-0"
                : "bg-[url('/background1.webp')] bg-left-top bg-blend-multiply bg-gray-400/20 my-10 lg:my-0"
            }
          >
            <h3 className="pt-20 text-3xl md:text-4xl lg:text-5xl text-center text-gray-950">
              Our Core Values
            </h3>
            <div className="flex flex-col-reverse lg:flex-row justify-around items-center my-20">
              <div className="flex flex-col md:flex-row flex-wrap justify-around items-center gap-4 lg:w-[50%] my-5">
                {objectives.map((item) => (
                  <SlideIn>
                    <div
                      key={item.head}
                      className="p-5 w-[90%] m-auto md:w-80 my-5 list-none text-center md:text-left cursor-pointer flex flex-col justify-between gap-4 items-center"
                    >
                      <div className="flex justify-center md:justify-start items-center gap-2 w-full">
                        <div className=" flex justify-center items-center rounded-full p-2">
                          <item.icon className="text-2xl text-gray-600" />
                        </div>
                        <h4 className="font-bold text-lg my-2 text-black capitalize">
                          {item.head}
                        </h4>
                      </div>
                      <p className="text-xs px-5 text-gray-900 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </SlideIn>
                ))}
              </div>
              <div className="w-[98%] md:w-[90%] lg:w-[45%]">
                <img
                  src={dou}
                  alt="core values"
                  className="w-full h-[40vh] md:h-[80vh] lg:h-[100vh] object-cover"
                />
              </div>
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
                  <p className="text-md md:text-lg flex items-center justify-center lg:mx-5 my-5 text-center font-bold bg-gradient-to-r from-[#cf9a1e] via-gray-500 to-[#cf9a1e] bg-clip-text text-transparent">
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
                  <p className="text-md md:text-lg flex items-center justify-center lg:mx-5 my-5 text-center font-bold bg-gradient-to-r from-[#cf9a1e] via-gray-500 to-[#cf9a1e] bg-clip-text text-transparent">
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
                  <p className="text-md md:text-lg flex items-center justify-center lg:mx-5 my-5 text-center font-bold bg-gradient-to-r from-[#cf9a1e] via-gray-500 to-[#cf9a1e] bg-clip-text text-transparent">
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
          <h1 className="w-[90%] lg:w-1/2 my-3 m-auto text-gray-400 animate-bounce">
            Milestone: Complete our first project - Durumi Site I - within the
            first 18 months of inception
          </h1>
          <div className="flex justify-center items-center overflow-auto test-scrollbar w-full">
            <div className="flex justify-between items-center gap-4 my-2 w-[300%]">
              {[m1, m2, m4, m3].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  className="w-[60%] md:w-[30%] h-auto object-cover mb-4 cursor-pointer"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </SlideIn>
      </section>
    </>
  );
};

export default AboutPage;
