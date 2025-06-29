import React from 'react'
import logo from '../assets/Logo_trans.png'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { PiArrowBendDoubleUpRight } from "react-icons/pi";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#333333] mt-20">
      <section className="flex flex-col md:flex-row justify-between items-start">
        <div className="w-[90%] md:w-[40%] lg:w-[30%] border-b-1 md:border-b-0 md:border-r-1 border-[#cf9a1e] md:my-10 mx-5 text-center md:text-left">
          <img
            src={logo}
            alt="brooklynhomes"
            className="w-[125px] my-5 m-auto md:mx-5"
            loading="lazy"
          />
          <p className="text-gray-400 w-[90%] m-auto my-5 text-sm leading-loose">
            At Brooklyn Homes, we specialize in property development, real
            estate investment, facility management, and investment advisory
            services. We redefine the real estate experience by delivering
            premium properties and unparalleled customer satisfaction.
          </p>
        </div>

        <div className="w-[90%] md:w-[40%] lg:w-[30%] md:my-10">
          <h1 className="m-auto w-1/2 md:w-[90%] my-5 text-lg lg:text-2xl text-gray-400 font-semibold text-center">
            Useful Links
          </h1>
          <ul className="m-auto w-[90%] my-4 text-gray-400 flex flex-col justify-between items-center">
            <Link to="/about">
              <li className="flex justify-start items-center">
                {/* <GoDash className="hidden md:block font-semibold text-[#cf9a1e] mr-2" /> */}
                About
              </li>
            </Link>

            <Link to="/projects">
              <li className="flex justify-start items-center">
                {/* <GoDash className="hidden md:block font-semibold text-[#cf9a1e] mx-2" /> */}
                Gallery
              </li>
            </Link>

            <Link to="/contact">
              <li className="flex justify-start items-center">
                Contact Us
                {/* <PiArrowBendDoubleUpRight className="hidden md:block font-semibold text-[#cf9a1e] mx-2 text-xs" /> */}
              </li>
            </Link>
          </ul>
        </div>

        <div className="w-[90%] md:w-[40%] lg:w-[30%] border-t-1 md:border-t-0 md:border-l-1 border-gray-300 md:my-10 m-auto md:m-0">
          <h1 className="m-auto w-1/2 md:w-[90%] text-center my-5 text-lg lg:text-2xl text-gray-400 font-semibold">
            Follow Us
          </h1>
          <div className="m-auto w-1/2 md:w-[90%] my-4 text-white flex justify-center items-center mt-5 md:mb-48 lg:mb-38">
            <i className="bg-[#cf9a1e] p-3 rounded-full mx-2">
              <FaFacebook />
            </i>
            <i className="bg-[#cf9a1e] p-3 rounded-full mx-2">
              <FaInstagram />
            </i>
            <i className="bg-[#cf9a1e] p-3 rounded-full mx-2">
              <FaLinkedinIn />
            </i>
          </div>
        </div>
      </section>

      <section className="text-gray-400 text-xs border-t-1 p-2">
        <p className="my-5 w-full text-center">
          Copyright @ 2025 Brooklyn Homes Ltd. All Rights Reserved
        </p>
        {/* <button className="p-4 bg-orange-700">Top</button> */}
      </section>
    </footer>
  );
}

export default Footer