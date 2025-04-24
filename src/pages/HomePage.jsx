import React from 'react'
import Hero from '../components/Hero';
import Services from '../components/services';
import baseImg from "../assets/durumi-site2/Durumi Site 2 A_9 - Photo.webp";
import secondImage from "../assets/durumi-site1/DurumiSite1_2.webp";
import ContactForm from '../components/ContactForm';
import Featured from '../components/Featured';
import SEO from '../components/SEO';
const HomePage = () => {
  return (
    <>
      <SEO
        title="Brooklyn Homes | Modern Real Estate & Construction"
        description="Discover Brooklyn Homes – your destination for modern real estate, property development, investment advisory services, and premium property management."
        keywords="Brooklyn Homes, real estate, construction, property development, investment, facility management, property management"
        image="https://brooklynhomesltd.com/homepage_seo_img.webp"
        url="https://brooklynhomesltd.com"
      />

      <div className="">
        <Hero />
        <main className="  text-white my-28 w-[97%] m-auto">
          <section>
            <div className="hidden lg:block my-10 w-[50%]">
              <h1 className="text-2xl lg:text-5xl leading-15">
                Brooklyn Homes, a modern real estate, building and construction
                company
              </h1>
            </div>
            <div className="">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="w-[90%] lg:w-1/2">
                  <img
                    src={baseImg}
                    alt="durumisiteII_base_image"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <div className="w-[90%] lg:w-[45%] mx-3 mb-0">
                  <h1 className="text-xl md:text-2xl my-5 text-center md:text-left">
                    Who we are
                  </h1>
                  <p className="text-md leading-8 my-5 md:my-3 lg:my-5">
                    Step into a world of exceptional real estate possibilities.
                    At
                    <span className="text-[#bc963f] mx-1">Brooklyn Homes</span>,
                    we don’t just build properties—we craft lifestyles. <br />{" "}
                    With a passion for excellence and innovation, we specialize
                    in property development, real estate investment, facility
                    management, and investment advisory services. <br />
                    Our mission is to redefine the real estate experience by
                    delivering premium properties and unparalleled customer
                    satisfaction. <br /> Whether you’re seeking a luxurious
                    home, a smart investment, or top-tier property management,
                    we’re here to make it happen. <br /> Welcome to your future.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Services />
          <Featured />
          <ContactForm />
        </main>
      </div>
    </>
  );
}

export default HomePage