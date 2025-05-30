import React, {useContext} from 'react'
import Hero from '../components/Hero';
import Services from '../components/services';
import baseImg from "../assets/durumi-site2/Durumi Site 2 A_9 - Photo.webp";
import secondImage from "../assets/durumi-site1/DurumiSite1_2.webp";
import ContactForm from '../components/ContactForm';
import Featured from '../components/Featured';
import SEO from '../components/SEO';
import Counter from '../components/Counter';
import SlideIn from '../components/SlideIn';
import { BackgroundContext } from '../components/BackgroundContext';
import { IoBedOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
const HomePage = () => {
  const {isDark} = useContext(BackgroundContext);
  const status = [
    {
      icon: GoProjectSymlink,
      num: 3,
      text: "Ongoing Projects",
    },
    {
      icon: IoBedOutline,
      num: '06',
      text: "Bedrooms",
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
        <main className="my-10 w-[97%] m-auto">
          <section>
            <div className="hidden lg:block my-10 w-[50%]">
              <h1 className="text-2xl lg:text-5xl leading-15">
                Brooklyn Homes, a modern real estate, building and construction
                company
              </h1>
            </div>
            <SlideIn>
              <div className="">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <div className="w-full lg:w-[90%]">
                    <img
                      src={baseImg}
                      alt="durumisiteII_base_image"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full lg:w-[45%] mx-3 mb-0 p-5">
                    <h1 className="text-xl md:text-2xl my-5 text-center md:text-left">
                      Who we are
                    </h1>
                    <p className="text-md leading-8 my-5 md:my-3 lg:my-5 text-center md:text-left">
                      At
                      <span className="text-[#cf9a1e] mx-1 font-bold">
                        Brooklyn Homes
                      </span>
                      , we don’t just build properties, we craft lifestyles.
                      With a passion for excellence and innovation, we
                      specialize in property development, real estate
                      investment, facility management, and investment advisory
                      services. Our mission is to redefine the real estate
                      experience by delivering premium properties and
                      unparalleled customer satisfaction. Whether you’re seeking
                      a luxurious home, a smart investment, or top-tier property
                      management, we’re here to make it happen. Welcome to your
                      future.
                    </p>
                    <div className="flex justify-between items-center mt-16 lg:mt-10 w-[85%] lg:w-full m-auto">
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
                    </div>
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
}

export default HomePage