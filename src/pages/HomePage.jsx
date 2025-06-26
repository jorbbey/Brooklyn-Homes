import React, { useContext } from "react";
import Hero from "../components/Hero";
import Services from "../components/services";
import baseImg from "../assets/durumi-site2/Durumi Site 2 A_9 - Photo.webp";
import secondImage from "../assets/durumi-site1/DurumiSite1_2.webp";
import ContactForm from "../components/ContactForm";
import Featured from "../components/Featured";
import SEO from "../components/SEO";
import Counter from "../components/Counter";
import SlideIn from "../components/SlideIn";
import { BackgroundContext } from "../components/BackgroundContext";
import { IoBedOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  const { isDark } = useContext(BackgroundContext);
  const status = [
    {
      icon: GoProjectSymlink,
      num: 2,
      text: "Projects",
    },
    {
      icon: IoBedOutline,
      num: "06",
      text: "Flats",
    },
  ];
  return (
    <>
      <SEO
        title="Brooklyn Homes | Modern Real Estate & Construction"
        description="Discover Brooklyn Homes – your destination for modern real estate, property development, investment advisory services, and premium property management."
        keywords="Brooklyn Homes, real estate, construction, property development, investment, facility management, property management"
        image="https://brooklynhomesltd.com/homepage_seo_img.webp"
        url="https://brooklynhomesltd.com"
      />

      <div className={isDark ? "bg-black text-white" : "bg-white text-black"}>
        <SlideIn>
          <Hero />
        </SlideIn>
        <main className="mt-10 w-[97%] m-auto">
          <section>
            <SlideIn>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl w-full md:w-3/4 my-20">
                Brooklyn Homes,
                <span
                  style={{ color: "#cf9a1e", fontWeight: "bold" }}
                  className="mx-1"
                >
                  <Typewriter
                    words={[
                      "redefining the real estate experience by delivering premium properties and unparalleled customer satisfaction and to be Abuja’s leading real estate firm by 2030, known for quality and innovation.",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={5000}
                  />
                </span>
              </h1>
            </SlideIn>
            <SlideIn>
              <div className="">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <div className="w-full lg:w-[50%]">
                    <img
                      src={baseImg}
                      alt="durumisiteII_base_image"
                      className="w-full lg:h-[65vh] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full lg:w-[50%] mx-3 mb-0 p-2 md:p-5">
                    <h1 className="text-xl md:text-2xl my-5 text-center md:text-left">
                      Who we are
                    </h1>
                    <p className="text-md leading-8 my-5 md:my-3 lg:my-5 text-left">
                      Brooklyn Homes Limited is a forward-thinking real estate
                      development and investment company based in Abuja,
                      Nigeria. We specialize in building high-quality
                      residential and commercial properties that combine modern
                      design with long-term value. With a strong focus on
                      professionalism, innovation, and integrity, we serve
                      homeowners, investors, and partners looking for reliable
                      real estate solutions. Whether it's project development,
                      property sales, investment advisory, or facility
                      management, we approach every project with precision and a
                      deep understanding of the local market. Our goal is simple
                      — to create real estate opportunities that deliver real
                      returns, lasting satisfaction, and community impact.
                      Backed by a team of skilled professionals and driven by a
                      commitment to excellence, Brooklyn Homes continues to grow
                      as a trusted name in Nigeria’s real estate landscape.
                      We’re not just building structures — we’re building trust,
                      wealth, and spaces people love to call home
                    </p>
                    {/* <div className="flex justify-around items-center mt-16 lg:mt-5 w-[85%] lg:w-full m-auto">
                      {status.map((stat, index) => (
                        <div className="w-24 md:w-39 mx-4" key={index}>
                          <div className="relative flex flex-col justify-around items-center md:items-start">
                            <i className="flex justify-center items-center">
                              <stat.icon
                                className={
                                  isDark
                                    ? "text-3xl md:text-4xl lg:text-4xl text-[#333333]"
                                    : "text-3xl md:text-4xl lg:text-4xl text-[#cf9a1e]"
                                }
                              />
                            </i>
                            <p className="text-4xl md:text-5xl my-2">
                              {stat.num}
                            </p>
                          </div>
                          <p
                            className={
                              isDark
                                ? "my-2 text-xs md:text-sm text-[#6d6969] text-center md:text-left"
                                : "my-2 text-xs md:text-sm  text-gray-900 text-center md:text-left"
                            }
                          >
                            {stat.text}
                          </p>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </SlideIn>
          </section>

          <SlideIn>
            <Services />
          </SlideIn>

          <SlideIn>
            <Featured />
          </SlideIn>

          <SlideIn>
            <ContactForm />
          </SlideIn>
        </main>
      </div>
    </>
  );
};

export default HomePage;
