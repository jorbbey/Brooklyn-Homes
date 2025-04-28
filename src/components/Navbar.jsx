import React, { useState, useRef } from "react";
import logo from "../assets/logo3.png";
import { FaArrowRightLong, FaBars } from "react-icons/fa6"; 
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); 
  const projectsLinkRef = useRef(null);
  const popupRef = useRef(null);

  const menuItems = [
    { text: "Home", link: "/home" },
    { text: "About Us", link: "/about" },
    { text: "Our Projects", link: "/projects" },
    { text: "Contact Us", link: "/contact" },
    { text: "Blog", link: "/blog" },
  ];

  return (
    <header className="flex justify-between items-center relative">
      <i className="mx-2 lg:mx-5 my-4">
        <img
          src={logo}
          alt="logo"
          className="w-[100px] lg:w-[125px]"
          loading="lazy"
        />
      </i>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-around items-center md:w-[50%] lg:w-[40%] ">
        {menuItems.map((item) => (
          <div
            key={item.text}
            ref={item.text === "Our Projects" ? projectsLinkRef : null}
          >
            <Link
              to={item.link}
              className="text-xs lg:text-sm list-none md:mx-0 lg:mx-6 text-white hover:text-[#bc963f] cursor-pointer w-20"
            >
              {item.text}
            </Link>
          </div>
        ))}
      </nav>

      {/* Desktop Button */}
      <button className="hidden md:flex bg-[#bc963f] text-white text-xs lg:text-md p-2 lg:p-4 mx-5 items-center cursor-pointer">
        Schedule Visit
        <FaArrowRightLong className="mx-2" />
      </button>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden mr-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#111] flex flex-col justify-center items-center space-y-8 md:hidden transition-all duration-300 ease-in-out z-40">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl hover:text-[#bc963f] transition-colors"
            >
              {item.text}
            </Link>
          ))}
          <button className="bg-[#bc963f] text-white text-md py-3 px-6 mt-4 flex items-center">
            Schedule Visit
            <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
