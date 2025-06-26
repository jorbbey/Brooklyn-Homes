import React, { useState, useRef, useContext } from "react";
import whiteLogo from '../assets/logo2.jpg'
import blackLogo from "../assets/logo3.png";
import { FaArrowRightLong, FaBars } from "react-icons/fa6"; 
import { FaTimes } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { BackgroundContext } from "./BackgroundContext";

const Navbar = ({}) => {
  const [isOpen, setIsOpen] = useState(false); 
  const projectsLinkRef = useRef(null);

  
   const {isDark, toggleBackground} = useContext(BackgroundContext);

  const menuItems = [
    { text: "Home", link: "/home" },
    { text: "About Us", link: "/about" },
    { text: "Projects", link: "/projects" },
    { text: "Contact Us", link: "/contact" },
    { text: "Blog", link: "/blog" },
  ];

  return (
    <header
      className={
        isDark
          ? "bg-black text-white flex justify-between items-center relative"
          : "bg-white text-black flex justify-between items-center relative"
      }
    >
      <Link to="/home" className="mx-5">
        <i className="mx-2 lg:mx-2 my-4">
          <img
            src={!isDark ? whiteLogo : blackLogo}
            alt="logo"
            className="w-[100px] lg:w-[125px]"
            loading="lazy"
          />
        </i>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-around items-center md:w-[45%] lg:w-[50%]">
        {menuItems.map((item) => (
          <div
            key={item.text}
            ref={item.text === "Our Projects" ? projectsLinkRef : null}
            className=""
          >
            <Link
              to={item.link}
              className="text-xs lg:text-xs list-none md:mx-0 lg:mx-6 font-bold hover:text-[#cf9a1e] cursor-pointer w-20 uppercase"
            >
              {item.text}
            </Link>
          </div>
        ))}
      </nav>

      <div className="flex flex-row-reverse justify-center items-center">
        {/* toggle background button */}
        <button
          className="hidden md:block text-xl p-2 cursor-pointer"
          onClick={toggleBackground}
        >
          {isDark ? <MdLightMode /> : <MdDarkMode />}
        </button>

        {/* Desktop Button */}
        <Link to="/contact" className="hidden md:block">
          <button className="hidden md:flex bg-[#cf9a1e] text-white text-xs lg:text-md font-semibold p-2 lg:p-4 mx-2 items-center cursor-pointer uppercase">
            Schedule Visit
            <FaArrowRightLong className="mx-2" />
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden mr-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={isDark ? "text-white text-2xl" : "text-black text-2xl"}
        >
          {isOpen ? <FaTimes className="text-white" /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#333333] flex flex-col justify-center items-center space-y-8 md:hidden transition-all duration-300 ease-in-out z-40">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl hover:text-[#cf9a1e] transition-colors"
            >
              {item.text}
            </Link>
          ))}

          <Link to="/contact">
            <button className="bg-[#cf9a1e] text-white text-md py-3 px-6 mt-4 flex items-center uppercase">
              Schedule Visit
              <FaArrowRightLong className="ml-2" />
            </button>
          </Link>

          {/* toggle background button */}

          <button className="text-xl p-2 m-4" onClick={toggleBackground}>
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
