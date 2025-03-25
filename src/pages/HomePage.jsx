import React from 'react'
import Hero from '../components/Hero';
import secondImage from "../assets/estate-1.jpg";
const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <main className="  text-black my-28 w-[97%] m-auto">
        <section>
          <div className="my-10 w-[40%] ">
            <h1 className="text-5xl leading-15">
              Brooklyn Homes, a modern real estate, building and construction
              company
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-1/2 h-[75vh] overflow-hidden ">
              <img src={secondImage} alt="image" className="w-[100%]" />
            </div>
            <div className="w-[40%] mx-3">
              <h1 className='text-3xl my-10'>Who we are</h1>
              <p className="text-lg leading-8 my-5">
                Step into a world of exceptional real estate possibilities. At
                Brooklyn Homes, we don’t just build properties—we craft
                lifestyles. With a passion for excellence and innovation, we
                specialize in property development, real estate investment,
                facility management, and investment advisory services. Our
                mission? To redefine the real estate experience by delivering
                premium properties and unparalleled customer satisfaction.
                Whether you’re seeking a luxurious home, a smart investment, or
                top-tier property management, we’re here to make it happen.
                Welcome to your future.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage