import React, { useState, useRef } from "react";
import logo from "../assets/logo3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const projectsLinkRef = useRef(null); // Ref for the "Our Projects" link
  const popupRef = useRef(null); // Ref for the popup itself

  const menuItems = [
    { text: "Home", link: "/home" },
    { text: "About Us", link: "/about" },
    { text: "Our Projects", link: "/projects" },
    { text: "Contact Us", link: "/contact" },
    { text: "Blog", link: "/blog" },
  ];

  const handleMouseEnter = () => setIsOpen(true); // Show popup
  // const handleMouseLeave = () => {
  //   // Check if we are not hovering over the popup itself
  //   if (!popupRef.current.contains(event.relatedTarget)) {
  //     setIsOpen(false); // Hide popup
  //   }
  // };

  // Calculate the position of the "Our Projects" link dynamically
  // const getPopupPosition = () => {
  //   if (projectsLinkRef.current) {
  //     const rect = projectsLinkRef.current.getBoundingClientRect();
  //     return {
  //       top: rect.bottom + window.scrollY, // Position below the link
  //       left: rect.left + window.scrollX, // Align it with the left of the link
  //     };
  //   }
  //   return { top: 0, left: 0 }; // Default fallback
  // };

  return (
    <header className="flex justify-between items-center">
      <i className="mx-2 lg:mx-5 my-4">
        <img
          src={logo}
          alt="logo"
          className="w-[100px] lg:w-[125px]"
          loading="lazy"
        />
      </i>

      <nav className="hidden md:flex justify-around items-center">
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

      {/* Wrapper for the popup */}
      {isOpen && (
        <div
          className="bg-red-500 flex flex-col justify-around items-center p-4 text-white absolute"
          style={getPopupPosition()}
          ref={popupRef}
          // Hide popup when leaving the popup
        >
          <Link to="/durumisite1" className="p-2 hover:text-[#bc963f]">
            Durumi Site I
          </Link>
          <Link to="durumisite2" className="p-2 hover:text-[#bc963f]">
            Durumi Site II
          </Link>
        </div>
      )}

      <button className="hidden md:flex bg-[#bc963f] text-white text-xs lg:text-md p-2 lg:p-4 mx-5 items-center cursor-pointer">
        Schedule Visit
        <FaArrowRightLong className="mx-2" />
      </button>
    </header>
  );
};

export default Navbar;
