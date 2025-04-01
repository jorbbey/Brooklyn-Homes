import React from 'react'
import { useState } from 'react';
import logo from "../assets/logo3.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { text: "Home", link: "/home" },
    { text: "About Us", link: "/about" },
    { text: "Our Projects", link: "/projects" },
    { text: "Contact Us", link: "/contact" },
    { text: "Blog", link: "/blog" },
  ];
  return (
    <header className="flex justify-between items-center">
      <i className="mx-2 lg:mx-5 my-4">
        <img src={logo} alt="logo" className="w-[100px] lg:w-[125px]" />
      </i>

      <nav className="hidden md:flex justify-around items-center">
        {menuItems.map((item) => (
          <Link to={item.link} key={item.text}>
            <li className="text-xs lg:text-sm list-none md:mx-0 lg:mx-6 text-white hover:text-[#bc963f] cursor-pointer w-20">
              {item.text}
            </li>
          </Link>
        ))}
      </nav>

      {/* mobile nav */}

      {/* <nav className="block md:hidden justify-around items-center bg-yellow-300 h-[100vh] right-0 top-0">
        {menuItems.map((item) => (
          <li
            key={item.text}
            className="text-xs lg:text-sm list-none md:mx-0 lg:mx-6 text-white hover:text-[#bc963f] cursor-pointer w-20"
          >
            {item.text}
          </li>
        ))}
      </nav> */}

      <button className="hidden md:flex bg-[#bc963f] text-white text-xs lg:text-md p-2 lg:p-4 mx-5  items-center cursor-pointer">
        Schedule Visit
        <FaArrowRightLong className="mx-2" />
      </button>
    </header>
  );
}

export default Navbar