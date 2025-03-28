import React from 'react'
import logo from '../assets/logo3.png'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
const Footer = () => {
  return (
    <footer className="bg-black">
      <section className="flex flex-col lg:flex-row justify-between items-start my-5">
        <div className="w-[90%] lg:w-[30%] lg:border-r-1 border-[#bc963f] my-10 mx-5">
          <img src={logo} alt="brooklynhomes" className="w-[125px] my-5" />
          <p className="text-gray-400 w-[90%] m-auto my-5 text-sm leading-loose">
            At Brooklyn Homes, we specialize in property development, real
            estate investment, facility management, and investment advisory
            services. We redefine the real estate experience by delivering
            premium properties and unparalleled customer satisfaction.
          </p>
        </div>

        <div className="w-[90%] lg:w-[40%] my-10">
          <h1 className="m-auto w-[90%] my-5 text-2xl text-white font-semibold">
            Useful Links
          </h1>
          <ul className="m-auto w-[90%] my-4 text-gray-400 flex justify-between items-center flex-wrap">
            <li className="flex justify-start items-center">
              <GoDash className="font-semibold text-[#bc963f] mx-2" />
              About
            </li>

            <li className="flex justify-start items-center">
              <GoDash className="font-semibold text-[#bc963f] mx-2" />
              Gallery
            </li>

            <li className="flex justify-start items-center">
              <GoDash className="font-semibold text-[#bc963f] mx-2" />
              Contact Us
            </li>
          </ul>
        </div>

        <div className="w-[90%] lg:w-[30%] lg:border-l-1 border-gray-300 my-10">
          <h1 className="m-auto w-[90%] my-5 text-2xl text-white font-semibold">
            Follow Us
          </h1>
          <div className="m-auto w-[90%] my-4 text-white flex justify-start items-center mt-5 lg:mb-48">
            <i className="bg-[#bc963f] p-3 rounded-full mx-2">
              <FaFacebook />
            </i>
            <i className="bg-[#bc963f] p-3 rounded-full mx-2">
              <FaInstagram />
            </i>
            <i className="bg-[#bc963f] p-3 rounded-full mx-2">
              <FaLinkedinIn />
            </i>
          </div>
        </div>
      </section>

      <section className="text-gray-400 flex justify-center items-center border-t-1 p-2">
        <p className="my-5">
          Copyright @ 2025 Brooklyn Homes Ltd. All Rights Reserved
        </p>
        {/* <button className="p-4 bg-orange-700">Top</button> */}
      </section>
    </footer>
  );
}

export default Footer