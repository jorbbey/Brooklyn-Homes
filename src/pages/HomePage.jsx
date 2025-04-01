import React from 'react'
import Hero from '../components/Hero';
import Services from '../components/services';
import secondImage from "../assets/estate2.jpg";
import ContactForm from '../components/ContactForm';
import Featured from '../components/Featured';
const HomePage = () => {
  return (
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
          <div className=''>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-[90%] md:w-1/2 h-[80vh] overflow-hidden">
                <img
                  src={secondImage}
                  alt="image"
                  className="w-[100%] mt-0 md:-mt-64 lg::-mt-72"
                />
              </div>
              <div className="w-[90%] md:w-[45%] lg:w-[40%] mx-3 mb-0 md:mb-64 lg:mb-0">
                <h1 className="text-2xl md:text-3xl my-10 md:my-0 lg:my-10 text-center md:text-left">
                  Who we are
                </h1>
                <p className="text-md md:text-lg leading-8 my-5 md:my-3 lg:my-5">
                  Step into a world of exceptional real estate possibilities. At
                  Brooklyn Homes, we don’t just build properties—we craft
                  lifestyles. With a passion for excellence and innovation, we
                  specialize in property development, real estate investment,
                  facility management, and investment advisory services.
                  <span className="block md:hidden lg:block">
                    Our mission? To redefine the real estate experience by
                    delivering premium properties and unparalleled customer
                    satisfaction. Whether you’re seeking a luxurious home, a
                    smart investment, or top-tier property management, we’re
                    here to make it happen. Welcome to your future.
                  </span>
                </p>
              </div>
            </div>
            <span className="hidden md:block lg:hidden w-full text-lg -mt-56">
              Our mission? To redefine the real estate experience by delivering
              premium properties and unparalleled customer satisfaction. Whether
              you’re seeking a luxurious home, a smart investment, or top-tier
              property management, we’re here to make it happen. Welcome to your
              future.
            </span>
          </div>
        </section>
        <Services />
        <Featured />
        <ContactForm />
      </main>
    </div>
  );
}

export default HomePage