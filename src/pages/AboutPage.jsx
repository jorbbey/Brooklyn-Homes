import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBuilding } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import trioTeam from "../assets/Brooklyn-Homes-Team/trio1.webp";
import trioTeam2 from "../assets/Brooklyn-Homes-Team/tio3.webp";
import johnSeth from "../assets/Brooklyn-Homes-Team/john-seth.webp";
import anthony from "../assets/Brooklyn-Homes-Team/anthony.webp";
// import image1 from "../assets/slide3-2.jpg";
import image1 from "../assets/Brooklyn-Homes-Team/dou1.webp";
import image2 from "../assets/family.jpg";
import image3 from "../assets/building-construction.jpg";
import m1 from "../assets/durumi-site1/DurumiSite1_1.webp";
import m2 from "../assets/durumi-site1/DurumiSite1_2.webp";
import m3 from "../assets/durumi-site1/DurumiSite1_3.webp";
import SubHero from "../components/SubHero";
import Typewritter from "../components/Typewritter";
import SEO from "../components/SEO";
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

  const executives = [
    {
      name: "John Seth",
      title: "Executive Director of Projects",
      image: johnSeth,
      desc: "John Seth serves as the Executive Director of Projects at Brooklyn Homes Limited. His role is central to the company's construction and site operations, where he leads strategic initiatives to boost the timely delivery of projects across different sites in accordance with company standards. With over 10 years as a Logistics and Supply Chain expert John has managed regional and global clients and has over 10 years as a real estate consultant across different parts of Nigeria.",
    },
    {
      name: "Anthony Onuoha",
      title: "Executive Director of Sales",
      image: anthony,
      desc: "  Anthony Chinedu Onuoha is the Executive Director of Sales. His role is central to the company’s sales operations, where he leads strategic initiatives to boost performance, mentor sales professionals, and enhance client engagement. Anthony’s broad skill set spans facility management, education, digital engagement, and team leadership. He has successfully managed mid-scale real estate projects and championed team building efforts that have contributed to business growth and innovation. Anthony Chinedu Onuoha is the Executive Director of Sales at Brooklyn Homes Limited. With over five years of experience in the real estate industry, Anthony has built a career defined by versatility and a results driven mindset. His professional journey includes time as a Facility Management Consultant and a Language Analyst, giving him a unique perspective that merges operational efficiency with a deep understanding of team dynamics and client relations. His role is central to the company’s sales operations, where he leads strategic initiatives to boost performance, mentor sales professionals, and enhance client engagement.",
    },
    {
      name: "Chidubem Ogbuehi",
      title: "Executive Director of Admin/Operations",
      image: johnSeth,
      desc: "  Chidubem Ogbuehi is the Executive Director of Admin/Operations at Brooklyn Homes Limited.  Chidubem holds a BSc in Mechanical Engineering from the Federal University of Technology Owerri and an MSc in International Energy Studies with a specialization in Energy and the Environment from the University of Dundee. His academic background has provided a solid foundation in engineering principles, energy systems, and environmental sustainability. As the Executive Director of Admin/Operations at Brooklyn Homes Limited, Chidubem oversees the day-to-day administrative and operational activities of the company. He is responsible for managing office operations, supervising administrative staff, and ensuring the smooth execution of company projects. Chidubem Ogbuehi is the Director of Operations/Admin in Brooklyn Homes Limited. As the Director of Operations/Admin, Chidubem oversees the day-to-day administrative and operational activities of Brooklyn Homes Limited. This includes managing office operations, supervising administrative staff, and ensuring the smooth execution of company projects.",
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
      <section className="text-black">
        <SubHero text="about us" />

        <div className="bg-gray-100 my-10 p-2">
          <p className=" m-auto w-[90%] lg:w-3/4 text-center text-[#cf9a1e] font-bold animate-bounce">
            <span className="text-lg lg:text-xl mx-1">Our Vision:</span> To be
            Abuja’s leading real estate firm by 2030, known for quality and
            innovation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-start my-20">
          <div className="w-[95%] lg:w-[40%] m-auto">
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
              <img
                src={trioTeam}
                alt="brooklynhomes trio team"
                loading="lazy"
              />
            </div>
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
          <div className="w-[90%] lg:w-[50%] m-auto">
            <h1 className="text-2xl lg:text-4xl text-center lg:text-left">
              Who We Are – Building Tomorrow’s Homes Today
            </h1>
            <div className="">
              <p className="text-sm md:text-md leading-loose my-5 lg:my-10 text-gray-950">
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
                      <h4 className="flex justify-center md:justify-start item-center font-semibold text-md text-[#cf9a1e]">
                        <item.icon className="text-center mr-2 my-1 w-[10%]" />
                        {item.head}
                      </h4>
                      <p className="my-2 text-sm text-gray-950">{item.desc}</p>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[98%] m-auto py-10">
          <h1 className="text-3xl font-semibold text-center mb-6 text-black">
            Meet our Executives
          </h1>

          {/* Horizontally scrollable container */}
          <div className="flex justify-around overflow-x-auto gap-6 scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-purple-300">
            {executives.map((exec, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[90%] sm:w-72 md:w-80 lg:w-[30%] my-5 rounded-lg p-4 cursor-pointer hover:shadow-2xl transition-shadow duration-300 bg-white shadow-md"
                onClick={() => setSelectedExec(exec)}
              >
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full rounded"
                />
                <div className="mt-5">
                  <h2 className="font-bold text-[#cf9a1e] text-xl">
                    {exec.name}
                  </h2>
                  <p className="text-sm text-gray-800 my-2 line-clamp-3">
                    {exec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for full info */}
          {selectedExec && (
            <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50 px-4 overflow-y-auto">
              <div className="flex flex-col lg:flex-row justify-around items-start bg-white rounded-xl w-full my-20 p-2 lg:p-6 relative overflow-y-auto ">
                <button
                  className="absolute top-2 right-4 text-2xl font-bold text-gray-700 hover:text-black cursor-pointer"
                  onClick={() => setSelectedExec(null)}
                >
                  ×
                </button>
                <img
                  src={selectedExec.image}
                  alt={selectedExec.name}
                  className="w-full lg:w-[30%] rounded"
                />
                <div className="my-10 lg:my-0 lg:w-[65%] leading-loose">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#cf9a1e] my-4">
                    {selectedExec.name}
                  </h2>
                  <span className="flex items-center text-sm md:text-md font-semibold text-[#cf9a1e] my-2">
                    <FaUserTie />
                    <p className="text-[#cf9a1e] text-xs font-bold mx-2">
                      {selectedExec.title}
                    </p>
                  </span>

                  <p className="text-gray-700 mt-10">{selectedExec.desc}</p>
                </div>
              </div>
            </div>
          )}
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
                  className="w-full object-cover"
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
