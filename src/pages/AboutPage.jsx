import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBuilding } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { GoDash } from "react-icons/go";
// import heroImg from "../assets/living-room2.webp ";
// import team0 from "../assets/Team.jpg";
import team0 from "../assets/dummy-team.jpg";
// import team1 from "../assets/realTeam1.webp ";
// import team2 from "../assets/realTeam2.webp ";
import image1 from "../assets/slide3-2.jpg";
import image2 from "../assets/family.jpg";
import image3 from "../assets/building-construction.jpg";
import m1 from "../assets/durumi-site1/DurumiSite1_1.webp";
import m2 from "../assets/durumi-site1/DurumiSite1_2.webp";
import m3 from "../assets/durumi-site1/DurumiSite1_3.webp";
import SubHero from "../components/SubHero";
import Typewritter from "../components/Typewritter";
import SEO from "../components/SEO";
const AboutPage = () => {
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
  const objectives = [
    {
      icon: FaHandshake,
      head: "Helping Clients Win",
      desc: "We simplify buying, selling, and investing with a seamless, stress-free process.",
    },
    {
      icon: FaMoneyBillWave,
      head: "Luxury & Investment Excellence",
      desc: "We deliver premium properties and high-yield opportunities.",
    },
    {
      icon: FaTools,
      head: "Integrity & Trust",
      desc: "We build lasting relationships grounded in honesty and professionalism.",
    },
    {
      icon: FaBuilding,
      head: "Community Growth",
      desc: "We connect people with homes that enhance neighborhoods and lives.",
    },
  ];
  return (
    <>
      <SEO
        title="About Us | Brooklyn Homes"
        description="Learn about Brooklyn Homes – our mission, core values, and the dedicated team driving excellence in real estate development, construction, and property management."
        keywords="About Brooklyn Homes, real estate company, construction experts, property management team, company mission, real estate development"
        image="https://brooklynhomesltd.com/homepage_seo_img.webp"
        url="https://brooklynhomesltd.com/about"
      />
      <section className="text-white">
        <SubHero text="about us" />

        <p className="my-10 m-auto w-[90%] lg:w-1/2 text-[#bc963f] animate-bounce">
          <span className="text-lg lg:text-xl mx-1">Our Vision:</span> To be
          Abuja’s leading real estate firm by 2030, known for quality and
          innovation.
        </p>

        <div className="flex flex-col lg:flex-row justify-around items-start my-20">
          <div className="w-[90%] lg:w-[40%] m-auto">
            <div className="my-5">
              {/* <Slider {...settings}>
              <div>
                <img
                  src={team1}
                  alt="Slide 1"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div>
                <img
                  src={team2}
                  alt="Slide 1"
                  className="w-full h-96 object-cover"
                />
              </div>
            </Slider> */}
              <img src={team0} alt="team" loading="lazy" />
            </div>
            <div className="my-5">
              <Slider {...settings}>
                <p className="text-[#bc963f] text-md md:text-xl mx-28 md:mx-64 lg:mx-44">
                  Mr. John Seth
                </p>
                <p className="text-[#bc963f] text-md md:text-xl mx-28 md:mx-64 lg:mx-44">
                  Mr. Anthony Onuoha
                </p>
                <p className="text-[#bc963f] text-md md:text-xl mx-28 md:mx-64 lg:mx-44">
                  Mr. Chidubem Ogbuehi
                </p>
              </Slider>
            </div>
          </div>
          <div className="w-[90%] lg:w-[50%] m-auto">
            <h1 className="text-2xl lg:text-4xl text-center lg:text-left">
              Who We Are – Building Tomorrow’s Homes Today
            </h1>
            <div className="">
              <p className="text-sm md:text-md leading-loose my-5 lg:my-10 text-gray-300">
                <span className="text-[#bc963f]">
                  Brooklyn Homes Limited
                </span>{" "}
                was born in August 2023 with a bold vision:{" "}
                <span className="font-semibold mx-1">
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
                <span className="text-[#bc963f] mx-1">
                  Mr. John Seth, Mr. Anthony Onuoha, and Mr. Chidubem Ogbuehi
                </span>
                —our team brings decades of collective experience to every
                project. <br /> At Brooklyn Homes we don't just build
                properties, we build trust, peace of mind and legacies.
              </p>

              <div className="my-10 lg:my-0">
                <p className="font-semibold text-md md:text-lg lg:text-xl text-center lg:text-left">
                  At Brooklyn Homes Limited, our core objectives drives
                  everything we do:
                </p>
                <div className="flex justify-around items-center flex-wrap my-2">
                  {objectives.map((item) => (
                    <li
                      key={item.head}
                      className=" p-2 w-full md:w-68 lg:w-60 my-5 md:my-2 list-none text-center md:text-left cursor-pointer"
                    >
                      <h4 className="flex justify-center md:justify-start item-center text-md text-[#bc963f]">
                        <item.icon className="text-center mr-2 my-1 w-[10%]" />
                        {item.head}
                      </h4>
                      <p className="my-2 text-sm text-gray-300">{item.desc}</p>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-20">
          <h1 className="text-2xl mx-auto text-center my-10">What we offer</h1>
          <ul className="mx-5">
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
          </ul>
        </div>

        <div className="w-[90%] lg:w-[65%] m-auto my-20">
          <h3 className="my-10">
            <span className="text-xl mx-1">Milestone:</span> Complete our first
            project--Durumi Site 1--within 18 months of inception.
          </h3>

          <div>
            <Slider {...settings}>
              <div>
                <img
                  src={m1}
                  alt="Slide 1"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src={m2}
                  alt="Slide 3"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src={m3}
                  alt="Slide 3"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
